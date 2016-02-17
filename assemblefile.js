var site,
    assemble = require('assemble'),
    rename = require('gulp-rename'),
    watch = require('base-watch'),
    markdown = require('gulp-markdown');

site = assemble({
  layout: 'default' 
});

site.layouts('./src/markup/layouts/*.hbs');

site.partials('./src/markup/modules/*.hbs');
site.partials('./src/markup/components/*.hbs');

site.pages('./src/markup/*.hbs');
site.pages('./src/posts/*.md');

site.helpers('./helpers/*.js');

site.use(watch());

site.task('default', function() {
  return site.toStream('pages')
    .pipe(markdown())
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
