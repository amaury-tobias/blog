module.exports = {
  apps: [
    {
      name: 'Blog_v2',
      script: 'npm',
      args: 'start',
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'amaurytobias',
      host: 'amaurytq.me',
      ref: 'origin/master',
      repo: 'git@github.com:amaury-tobias/blog_v2.git',
      path: '/home/amaurytobias/production/blog_v2',
      'post-deploy':
        'npm install && npm run generate && pm2 reload ecosystem.config.js'
    }
  }
}
