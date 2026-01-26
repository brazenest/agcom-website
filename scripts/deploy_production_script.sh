handle_error() {
  echo "$1. Terminating script..."
  exit 1
}

cd ~/webapps/agcom-website/deployments/production
trap 'handle_error "Failed to pull from origin"' ERR
git pull origin main
trap 'handle_error "Failed to install dependencies"' ERR
yarn install --frozen-lockfile
trap 'handle_error "Failed to build project"' ERR
yarn build
trap 'handle_error "Failed to run tests"' ERR
yarn test
trap 'handle_error "Failed to restart production server"' ERR
pm2 restart agcom-website-production
