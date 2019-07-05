module.exports = {
  apps: [
    {
      name: 'Blog_v2',
      script: 'start',
      cwd: '/home/amaurytobias/production/blog_v2/current',
      max_memory_restart: '300M'
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
