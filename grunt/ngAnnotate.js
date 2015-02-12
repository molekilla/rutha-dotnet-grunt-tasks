module.exports = {
  options: {
    singleQuotes: true,
    ngAnnotateOptions: {}
  },
  dev: {
    files: {
      '<%= cwd %>/dist/js/app.js': ['<%= cwd %>/dist/js/app.js']
    }
  },
  build: {
    files: {
      '<%= cwd %>/releases/v<%= pkg.version %>/ui/dist/js/app.js': ['<%= cwd %>/releases/v<%= pkg.version %>/ui/dist/js/app.js']
    }
  }
};