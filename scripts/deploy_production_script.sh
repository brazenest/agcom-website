handle_error() {
  echo "$1. Terminating script..."
  exit 1
}

cd ~/webapps/agcom-website/deployments/production

# Clone repository if that hasn't been done yet.
trap 'handle_error "Failed to clone repository"' ERR
if ! [ -f "package.json" ]; then
  rm -rf *
  git clone github:brazenest/agcom-website.git
  mv agcom-website/* .
  mv agcom-website/.* .
  rmdir agcom-website
fi

trap 'handle_error "Failed to pull from origin"' ERR
git pull origin main

trap 'handle_error "Failed to install dependencies"' ERR
yarn install

trap 'handle_error "Failed to build project"' ERR
yarn build

# trap 'handle_error "Failed to run tests"' ERR
# yarn test

trap 'handle_error "Failed to restart nginx"' ERR
sudo nginx -s reload

trap 'handle_error "Failed to restart production server"' ERR
pm2 restart agcom-website-production

echo "Successfully deployed production version of agcom-website."
