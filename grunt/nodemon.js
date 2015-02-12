module.exports = {
  dev: {  
    options: {
      exec: '<%= nodemon.exec %>',
      delay: '<%= nodemon.delay || 900 %>',
      env: {
        ASPNET_ENV: '<%= nodemon.environment %>'
      }
    }
  }
};