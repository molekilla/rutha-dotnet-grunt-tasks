module.exports = {
  dev: {
    options: {
      delay: '<%= nodemon.delay || 900 %>',
      nodeArgs: '<%= nodemon.args || [] %>',
      env: {
        ASPNET_ENV: '<%= nodemon.environment %>'
      }
    }
  }
};