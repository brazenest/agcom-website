handle_error() {
  echo "A fatal error occurred: $1"
  exit 1
}

cd ~/webapps/agcom-website/deployments/production
git pull origin main
trap 'handle_error "Failed to pull from origin"' ERR
yarn install --frozen-lockfile
yarn build
yarn test
pm2 restart agcom-website-production
