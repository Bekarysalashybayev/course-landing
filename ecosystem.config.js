module.exports = {
  apps: [
    {
      name: 'course-landing',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
