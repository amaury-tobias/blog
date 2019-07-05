module.exports = {
  apps: [
    {
      name: 'Blog_v2',
      script: 'npm',
      args: 'start',
      cwd: '/home/amaurytobias/production/blog_v2/current',
      error_file: '/home/amaurytobias/production/blog_v2/logs/web.err.log',
      out_file: '/home/amaurytobias/production/blog_v2/logs/web.out.log',
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

module.exports = {
  apps: [],

  deploy: {
    production: {
      user: 'deploy',
      host: '192.168.13.3',
      ref: 'origin/develop',
      repo: 'git@bitbucket.org:hoang_app/malog-nuxt.git',
      path: '/home/deploy/hoang_fe/',
      'pre-deploy': 'git fetch --all',
      'post-deploy':
        'yarn install && yarn build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
