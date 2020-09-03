module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNMAE',
      host : 'ec2-18-216-235-26.us-east-2.compute.amazonaws.com',
      ref  : 'origin/master',
      repo : 'https://github.com/withteja/Collabwatch.git',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
