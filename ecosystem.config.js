module.exports = {
  apps: [
    {
      name: 'Blog',
      script: './server/index.js'
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
        'npm install && npm run generate && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
