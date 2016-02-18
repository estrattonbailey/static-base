var site,
    assemble = require('assemble'),
    rename = require('gulp-rename'),
    watch = require('base-watch');

site = assemble({
  layout: 'default' 
});

site.use(watch());

site.task('load', function(cb){
  site.layouts('./src/markup/layouts/*.hbs');

  site.partials('./src/markup/modules/*.hbs');
  site.partials('./src/markup/components/*.hbs');

  site.pages('./src/markup/*.hbs');
  site.pages('./src/posts/*.md');

  site.helpers('./helpers/*.js');
  site.helper('markdown', require('helper-markdown'));

  cb()
});

site.task('default', 'load', function() {
  return site.toStream('pages')
    .pipe(site.renderFile())
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(site.dest('./dist'));
});

site.task('watch', function(){
  site.watch(['./src/markup/**/*.hbs', './src/posts/*.md'], ['default']);
});

module.exports = site;
