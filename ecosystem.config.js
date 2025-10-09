module.exports = {
    apps: [
        {
            name: "agcom-website_pm2",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3000", //running on port 3000
            watch: false,
        },
    ],
};
