handle_error() {
  echo "$1. Terminating script..."
  exit 1
}

BASE_PATH="~/webapps/agcom-website"

cd $BASE_PATH/deployments/production

# Delete all existing files except .env.*
rm -rf *
mv .env.* ..

# Clone repository if that hasn't been done yet.

trap 'handle_error "Failed to clone repository"' ERR
rm -rf *
git clone github:brazenest/agcom-website.git
mv $BASE_PATH/* .
mv $BASE_PATH/.* .
rmdir $BASE_PATH

mv ../.env.* .

trap 'handle_error "Failed to pull from origin"' ERR
git pull origin main

# Prepare app for launch

trap 'handle_error "Failed to install dependencies"' ERR
yarn install

trap 'handle_error "Failed to build project"' ERR
yarn build

# trap 'handle_error "Failed to run tests"' ERR
# yarn test

trap 'handle_error "Failed to restart nginx"' ERR
sudo nginx -s reload

trap 'handle_error "Failed to restart production server"' ERR
pm2_status='pm2 describe agcom-website-production'

if {
  [ -z "$pm2_status" ] || [[ $pm2_status == *"agcom-webite-production doesn't exist"* ]]; 
} then {
  pm2 start npm --name "agcom-website-production" -- run start
} else {
  pm2 restart agcom-website-production
}

echo "Successfully deployed production build of agcom-website."
