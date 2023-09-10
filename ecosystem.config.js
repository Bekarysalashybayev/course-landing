module.exports = {
  apps: [
    {
      name: 'course-landing',
      port: '3000',
      exec_mode: 'fork',
      instances: 'max',
      script: '/var/www/front/course-landing/.output/server/index.mjs'
    }
  ]
}
