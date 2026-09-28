# Ashen Realms — Real Payment Setup

The game now contains a payment bridge, but **real money is intentionally disabled until a legal payment provider is configured**.

## Flow
Game -> /api/create-order -> payment provider -> callback -> server-side verification -> database entitlement -> player account

## What is already added
- Real-payment buttons in the in-game shop
- Anonymous player ID stored locally
- Server endpoint placeholder
- Callback endpoint placeholder
- Fail-closed behavior when payment secrets are missing

## What is still required
1. A payment/merchant account held by the legally responsible adult/entity.
2. The exact payment provider and its API/callback specification.
3. Server environment variables:
   - PAYMENT_CREATE_URL
   - PAYMENT_MERCHANT_ID
   - PAYMENT_SECRET
4. A real database for player accounts, orders, entitlements and idempotency.
5. Provider-specific server-side transaction verification.

**Never put PAYMENT_SECRET in the HTML or client-side JavaScript.**

For a minor, the commercial/payment account must be created and operated by the parent/legal guardian or other legally authorized adult/entity.
