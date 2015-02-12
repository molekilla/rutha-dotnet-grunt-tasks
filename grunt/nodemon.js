module.exports = {
  dev: {  
    options: {
      ext: '<%= nodemon.ext || "vb, vbhtml, cs, cshtml, json, css, js, jshtml" %>',
      exec: '<%= nodemon.exec %>',
      delay: '<%= nodemon.delay || 900 %>',
      env: {
        ASPNET_ENV: '<%= nodemon.environment %>'
      }
    }
  }
};