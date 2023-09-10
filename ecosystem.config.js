module.exports = {
  apps: [
    {
      name: 'your-app-name', // Replace with your app's name
      script: 'node', // Use 'node' to run a Node.js script
      args: 'dist/server/index.js', // Path to the Nuxt 3 server entry file
      instances: 'max', // You can adjust the number of instances
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
