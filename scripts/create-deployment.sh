#!/bin/bash

# Create a temporary directory for the deployment package
mkdir -p deployment

# Copy necessary files and directories
cp -r app deployment/
cp -r components deployment/
cp -r lib deployment/
cp -r public deployment/
cp -r .next deployment/
cp package.json deployment/
cp package-lock.json deployment/
cp next.config.mjs deployment/
cp tsconfig.json deployment/
cp .env deployment/

# Create the zip file
cd deployment
zip -r ../duolingo-deployment.zip .

# Clean up
cd ..
rm -rf deployment

echo "Deployment package created: duolingo-deployment.zip" 