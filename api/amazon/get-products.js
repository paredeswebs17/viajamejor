// Versión simplificada sin dependencias externas
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { asins } = req.body;

  if (!asins || !Array.isArray(asins)) {
    return res.status(400).json({ error: 'ASINs array required' });
  }

  try {
    // Simular respuesta de Amazon API mientras configuramos las credenciales
    // Esta versión devuelve datos mock para que funcione inmediatamente
    const mockProducts = {};
    
    asins.forEach(asin => {
      // Precios mock basados en los ASINs reales
      const mockPrices = {
        'B0CBVFL64Z': { price: '39.99', originalPrice: '49.99' },
        'B0B2DRC76L': { price: '18.95', originalPrice: null },
        'B08VD632WJ': { price: '22.99', originalPrice: '27.99' },
        'B01IDJM8OA': { price: '12.99', originalPrice: null },
        'B0B96TP1WX': { price: '28.50', originalPrice: '35.00' },
        'B071VG5N9D': { price: '54.99', originalPrice: null },
        'B071HHX6VF': { price: '74.99', originalPrice: '89.99' },
        'B0BCKHQGJN': { price: '32.99', originalPrice: null }
      };

      const mock = mockPrices[asin] || { price: '29.99', originalPrice: null };
      
      mockProducts[asin] = {
        asin: asin,
        title: `Producto actualizado - ${asin}`,
        currentPrice: `€${mock.price}`,
        originalPrice: mock.originalPrice ? `€${mock.originalPrice}` : null,
        availability: 'En stock',
        rating: 4.2 + Math.random() * 0.8, // Rating entre 4.2 y 5.0
        reviewCount: Math.floor(Math.random() * 1000) + 100,
        imageUrl: null
      };
    });

    // Cache por 1 hora
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json({ products: mockProducts });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
}