// Ashen Realms — payment order endpoint
// Deploy this file as a serverless function. Never put payment secrets in the HTML.
// Set these environment variables on the server:
// PAYMENT_CREATE_URL, PAYMENT_MERCHANT_ID, PAYMENT_SECRET
//
// The exact request/verification format depends on the legally selected payment provider.
// This adapter intentionally fails closed until those values are configured.

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({message:'Method not allowed'});
  const {productId, playerId} = req.body || {};
  const products = {
    season_pass: {title:'Ashen Realms Season Pass', amount: 0},
    cosmetic_skin: {title:'Ashen Realms Cosmetic Skin', amount: 0}
  };
  if (!products[productId] || !playerId) return res.status(400).json({message:'Invalid order'});

  const createUrl = process.env.PAYMENT_CREATE_URL;
  const merchantId = process.env.PAYMENT_MERCHANT_ID;
  const secret = process.env.PAYMENT_SECRET;

  if (!createUrl || !merchantId || !secret) {
    return res.status(503).json({message:'Payment provider is not configured yet'});
  }

  // Provider-specific API call goes here after selecting the compliant gateway.
  // Do not accept a client-supplied "paid=true" flag.
  return res.status(501).json({message:'Provider adapter must be configured for the selected gateway'});
}
