var pubAssets = "./public/assets";
var sourceFiles  = "./gulp/assets";

module.exports = {
  pubAssets: pubAssets,
  browserSync: {
    proxy: 'localhost:9000',
    files: ['./app/**/*.*','./conf/*.*','messages/*.*']
  },
  sass: {
    src: sourceFiles + "/stylesheets/**/*.{sass,scss}",
    dest: pubAssets + "/stylesheets",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/assets/images' // Used by the image-url helper
    }
  },
  images: {
    src: sourceFiles + "/images/**",
    dest: pubAssets + "/images"
  },
  iconFont: {
    name: 'Gulp Rails Icons',
    src: sourceFiles + "/icons/*.svg",
    dest: pubAssets + '/fonts',
    sassDest: sourceFiles + '/stylesheets/base',
    template: './gulp/tasks/iconFont/template.sass',
    sassOutputName: '_iconFont.sass',
    fontPath: '/assets/fonts',
    className: 'icon',
    options: {
      fontName: 'gulp-rails-icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    bundleConfigs: [{
      entries: sourceFiles + '/javascripts/global.coffee',
      dest: pubAssets + '/javascripts',
      outputName: 'global.js',
      extensions: ['.js','.coffee']
    }]
  }
};
