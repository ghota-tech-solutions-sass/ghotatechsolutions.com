#!/bin/bash

# Exit on error
set -e

# Configuration
PROJECT_ID="ghota-tech-solutions"
REGION="europe-west1"
SERVICE_NAME="ghotatechsolutions-website"
DOMAIN="ghotatechsolutions.com"
echo "🚀 Starting deployment for $SERVICE_NAME..."


# Deploy to Cloud Run using source deployment
# This will automatically build the Docker image and deploy
echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --source . \
  --platform managed \
  --region $REGION \
  --project $PROJECT_ID \
  --allow-unauthenticated

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 To map the custom domain $DOMAIN:"
echo "   1. Verify domain ownership in Google Search Console"
echo "   2. Run: gcloud beta run domain-mappings create --service $SERVICE_NAME --domain $DOMAIN --region $REGION --project $PROJECT_ID"
echo ""
