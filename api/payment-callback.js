// Ashen Realms — payment callback skeleton
// The payment provider must call this endpoint after checkout.
// Server-side verification is mandatory before granting any item.

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') return res.status(405).json({message:'Method not allowed'});
  // TODO: verify provider signature/transaction server-to-server.
  // TODO: record order as paid in the database.
  // TODO: grant the purchased entitlement exactly once (idempotently).
  return res.status(501).json({message:'Payment callback verification is not configured'});
}
