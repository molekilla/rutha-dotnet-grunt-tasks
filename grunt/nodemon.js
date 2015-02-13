module.exports = {
  dev: {  
    options: {
      ext: '<%= nodemon.ext || "vb, vbhtml, cs, cshtml" %>',
      exec: '<%= nodemon.exec %>',
      delay: '<%= nodemon.delay || 900 %>',
      env: {
        ASPNET_ENV: '<%= nodemon.environment %>'
      }
    }
  }
};