handle_error(msg) {
  echo "A fatal error occurred: $msg"
  exit 1
}

cd ~/webapps/agcom-website/deployments/production
git pull origin main
trap 'handle_error "Failed to pull from origin"' ERR
npm ci
npm run build
npm run test
pm2 restart agcom-website-production
