module.exports = {
  test: {
    tasks: ['nodemon', 'protractor:run'],
    options: {
      logConcurrentOutput: true
    }
  },
  auto: {
    tasks: ['nodemon', 'browserSync', 'watch'],
    options: {
      logConcurrentOutput: true
    }
  },
  dev: {
    tasks: ['nodemon', 'watch'],
    options: {
      logConcurrentOutput: true
    }
  }
};
