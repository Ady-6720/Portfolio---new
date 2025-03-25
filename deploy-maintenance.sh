#!/bin/bash

# Create a temporary directory for the maintenance page
mkdir -p temp-build

# Copy only the necessary files
cp public/index.html temp-build/
cp public/favicon.svg temp-build/

# Create a simple CNAME file
echo "www.adityamalode.com" > temp-build/CNAME

# Deploy to GitHub Pages
git checkout --orphan gh-pages
git rm -rf .
mv temp-build/* .
rm -rf temp-build
git add .
git commit -m "Deploy maintenance page"
git push origin gh-pages --force

# Switch back to main branch
git checkout main 