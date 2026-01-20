cd ~/webapps/agcom-website/deployments/production
git pull origin main
npm ci
npm run build
npm run test
pm2 restart agcom-website-production
