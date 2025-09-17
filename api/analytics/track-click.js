export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    event,
    product_asin,
    product_title,
    price,
    article,
    timestamp
  } = req.body;

  try {
    console.log('📊 Click Analytics:', {
      event,
      product_asin,
      product_title,
      price,
      article,
      timestamp,
      user_agent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    res.status(500).json({ error: 'Failed to track click' });
  }
}