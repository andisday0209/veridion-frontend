#!/bin/bash

# Enable GitHub Pages for this repository
# Usage: ./enable-pages.sh <GITHUB_TOKEN>
# Or set GITHUB_TOKEN environment variable

GITHUB_TOKEN="${1:-$GITHUB_TOKEN}"
REPO_OWNER="andisday0209"
REPO_NAME="veridion-frontend"

if [ -z "$GITHUB_TOKEN" ]; then
    echo "Error: GitHub token not provided"
    echo "Usage: ./enable-pages.sh <GITHUB_TOKEN>"
    echo "Or: export GITHUB_TOKEN='your_token' && ./enable-pages.sh"
    exit 1
fi

echo "Enabling GitHub Pages for $REPO_OWNER/$REPO_NAME..."

# Call GitHub API to enable GitHub Pages on gh-pages branch
curl -X POST \
  "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/pages" \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{
    "source": {
      "branch": "gh-pages",
      "path": "/"
    },
    "build_type": "workflow"
  }'

echo ""
echo "GitHub Pages configuration sent!"
echo "Your site will be available at: https://$REPO_OWNER.github.io/$REPO_NAME/"

