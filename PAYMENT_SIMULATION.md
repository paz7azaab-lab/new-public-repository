# Ashen Realms — Payment Simulation

This is a development-only checkout simulator. It does not charge money and does not connect to a payment provider.

It tests three outcomes:
- successful payment -> grants the test entitlement
- failed payment -> grants nothing
- cancelled payment -> grants nothing

Production payment must use the legally selected provider, server-side verification, and a real database. Never place payment secrets in the client.
