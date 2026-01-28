handle_error() {
  echo "$1. Terminating script..."
  exit 1
}

APP_NAME="agcom-website"
APP_PROD_DEPLOYMENT_NAME="$APP_NAME-production"
BASE_PATH="/home/ec2-user/a/$APP_NAME"
APP_PROD_PATH="$BASE_PATH/deployments/production"
GIT_PULL_PATH="$APP_PROD_PATH/$APP_NAME"

trap 'handle_error "Failed to switch to production path"' ERR
cd "$APP_PROD_PATH"

# trap 'handle_error "Failed to obtain app status (i.e. whether it exists)"' ERR
# pm2_status="$(pm2 describe $APP_PROD_DEPLOYMENT_NAME)"
# echo "pm2 status: $pm2_status"
#
# If app is running, then stop its pm2 process.
# if {
#   ! [[ $pm2_status == *"$APP_PROD_DEPLOYMENT_NAME doesn't exist"* ]]; 
# } then {
#  trap 'handle_error "Failed to stop and delete old pm2 process"' ERR
# pm2 stop $APP_PROD_DEPLOYMENT_NAME
#  pm2 delete $APP_PROD_DEPLOYMENT_NAME
# }
# fi

# Delete all existing files except .env.*
trap 'handle_error "Failed to clear deployment directory"' ERR
rm -rf *      # All remaining non-dot directories and files
mv .env.* ..
rm -rf .*     # All remaining dot directories and files


# Clone repository if that hasn't been done yet.
echo "node version: $(node --version)"
echo "npm version: $(npm --version)"
trap 'handle_error "Failed to clone repository"' ERR
git clone github:brazenest/agcom-website.git
mv $GIT_PULL_PATH/* .
mv $GIT_PULL_PATH/.* .
rmdir $GIT_PULL_PATH

mv ../.env.* .


# Pull latest changes from main branch

#trap 'handle_error "Failed to pull from origin"' ERR
#git pull origin main


# Prepare app for launch

trap 'handle_error "Failed to install dependencies"' ERR
yarn install

trap 'handle_error "Failed to build project"' ERR
yarn build

# trap 'handle_error "Failed to run tests"' ERR
# yarn test

trap 'handle_error "Failed to restart nginx"' ERR
sudo nginx -s restart

trap 'handle_error "Failed to restart production server"' ERR
pm2 start npm --name "$APP_PROD_DEPLOYMENT_NAME" -- run start

echo "Successfully deployed production build of $APP_NAME.\n\n"
exit 0
