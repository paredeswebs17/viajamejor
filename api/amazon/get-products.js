import aws4 from 'aws4';
import axios from 'axios';

const AMAZON_CONFIG = {
  accessKey: process.env.AMAZON_ACCESS_KEY || 'AKPAVA6G531758039741',
  secretKey: process.env.AMAZON_SECRET_KEY,
  associateTag: process.env.AMAZON_ASSOCIATE_TAG || 'viajamejor-21',
  region: 'us-east-1',
  host: 'webservices.amazon.es'
};

async function getAmazonProducts(asins) {
  const payload = {
    Operation: 'GetItems',
    Marketplace: 'www.amazon.es',
    PartnerTag: AMAZON_CONFIG.associateTag,
    PartnerType: 'Associates',
    ItemIds: asins,
    Resources: [
      'Images.Primary.Large',
      'ItemInfo.Title',
      'Offers.Listings.Price',
      'CustomerReviews.StarRating',
      'CustomerReviews.Count',
      'Offers.Listings.Availability.Message',
      'Offers.Listings.SavingsAmount'
    ]
  };

  const url = `https://${AMAZON_CONFIG.host}/paapi5/getitems`;
  
  const request = {
    method: 'POST',
    url: url,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Encoding': 'amz-1.0',
      'X-Amz-Target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems'
    },
    body: JSON.stringify(payload),
    host: AMAZON_CONFIG.host,
    region: AMAZON_CONFIG.region
  };

  aws4.sign(request, {
    accessKeyId: AMAZON_CONFIG.accessKey,
    secretAccessKey: AMAZON_CONFIG.secretKey
  });

  try {
    const response = await axios(request);
    return response.data;
  } catch (error) {
    console.error('Amazon API Error:', error.response?.data || error.message);
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { asins } = req.body;

  if (!asins || !Array.isArray(asins)) {
    return res.status(400).json({ error: 'ASINs array required' });
  }

  try {
    const amazonResponse = await getAmazonProducts(asins);
    const products = {};

    if (amazonResponse.ItemsResult?.Items) {
      amazonResponse.ItemsResult.Items.forEach(item => {
        const price = item.Offers?.Listings?.[0]?.Price?.Amount;
        const savings = item.Offers?.Listings?.[0]?.SavingsAmount?.Amount;
        
        products[item.ASIN] = {
          asin: item.ASIN,
          title: item.ItemInfo?.Title?.DisplayValue || 'Producto no disponible',
          currentPrice: price ? `€${price}` : 'Precio no disponible',
          originalPrice: savings ? `€${(parseFloat(price) + parseFloat(savings)).toFixed(2)}` : null,
          availability: item.Offers?.Listings?.[0]?.Availability?.Message || 'Unknown',
          rating: item.CustomerReviews?.StarRating?.Value || null,
          reviewCount: item.CustomerReviews?.Count || null,
          imageUrl: item.Images?.Primary?.Large?.URL || null
        };
      });
    }

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json({ products });

  } catch (error) {
    console.error('API Error:', error);
    
    const fallbackProducts = {};
    asins.forEach(asin => {
      fallbackProducts[asin] = {
        asin,
        title: null,
        currentPrice: null,
        availability: 'Verificar en Amazon'
      };
    });

    res.status(200).json({ products: fallbackProducts });
  }
}