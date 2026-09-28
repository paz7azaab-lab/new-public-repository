# Content Autopilot

Fully automated content-production starter for Vercel.

## Environment variables
- OPENAI_API_KEY: model API key
- OPENAI_MODEL: model name (default gpt-5-mini)
- CONTENT_TOPIC: recurring topic/niche
- CRON_SECRET: optional protection for cron endpoint
- PUBLISH_WEBHOOK_URL: optional publisher endpoint (n8n/Make/custom API)
- PUBLISH_WEBHOOK_SECRET: optional webhook secret

## Flow
Cron -> AI generation -> JSON package -> publisher webhook -> destination platform.

The engine is designed so publishing can be swapped without changing the generation agent.