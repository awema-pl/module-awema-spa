const gulp = require('gulp')
const clean = require('gulp-clean')
const merge = require('merge-stream');
const plumber = require('gulp-plumber')
const noop = require('gulp-noop')
const stylus = require('gulp-stylus')
const postcss = require('gulp-postcss')
const nib = require('nib')
const sourcemaps = require('gulp-sourcemaps')
const rollup = require('gulp-rollup')
const fs = require('fs')
const data = require('gulp-data')
const pug = require('gulp-pug')
const prettyHtml = require('gulp-pretty-html')
const browserSync = require('browser-sync').create()
const _ = require('lodash')

// Modes
const isDev = process.env.NODE_ENV === 'development'
const isModern = process.env.BROWSERS_ENV === 'modern'


/*
 * Server
 */

if ( isDev ) {
  gulp.task('serve', function(){

    browserSync.init({
      ui: false,
      open: false,
      notify: false,
      server: ['./examples', './dist']
    })

    gulp.watch(['./resources/js/**/*.js'], gulp.series('build:js', 'reload'))
    gulp.watch('./resources/html/**/*.pug', gulp.series('build:html', 'reload'))
  })

  gulp.task('reload', function(done) { browserSync.reload(); done() })
}


/*
 * JS
 */

const rollupConfig = require('./rollup.config.js')
rollupConfig.rollup = require('rollup')
rollupConfig.allowRealFiles = true, // solves gulp-rollup hipotetical file system problem

gulp.task('build:js', function(){
  return gulp.src('./resources/js/main.js')
    .pipe( plumber() )
    .pipe( isDev ? sourcemaps.init() : noop() )
    .pipe( rollup(rollupConfig) )
    .pipe( isDev ? sourcemaps.write() : noop() )
    .pipe( gulp.dest('./dist/js') )
})


/*
 * Styles
 */

gulp.task('build:css', function(){
  return gulp.src('./resources/css/main.styl')
    .pipe( plumber() )
    .pipe( isDev ? sourcemaps.init() : noop() )
    .pipe( stylus({ use: nib(), 'include css': true, import: ['nib'], compress: false }) )
    .pipe( postcss() )
    .pipe( isDev ? sourcemaps.write() : noop() )
    .pipe( gulp.dest('./dist/css') )
    .pipe( isDev ? browserSync.stream() : noop() )
})


/*
 * HTML
 */

gulp.task('build:html', function(){
  return gulp.src('./resources/html/*.pug')
    .pipe( plumber() )
    .pipe( data( function() {
      let nav = []
      fs.readdirSync('./resources/html').forEach( file => {
        if ( ! ~file.indexOf('.pug') ) return
        if ( file ==='index.pug') {
          nav.push({ name: 'Homepage', href: '/' })
        } else {
          nav.push({
            name: _.upperFirst( file.replace('.pug', '') ),
            href: '/' + file.replace('.pug', '.html')
          })
        }
      });
      return { nav: nav }
    }) )
    .pipe( pug() )
    .pipe( prettyHtml() )
    .pipe( gulp.dest('./examples') )
})


/*
 * Gloabl tasks
 */

gulp.task('clean', function(){

  let cleanDist = gulp.src('./dist', { read: false, allowEmpty: true })
        .pipe( clean() )

  let cleanHtml = gulp.src('./examples/*.html', { read: false, allowEmpty: true })
        .pipe( clean() )

  return merge(cleanDist, cleanHtml)
})

gulp.task('build', gulp.parallel('build:js', 'build:css', 'build:html') )

// start
defaultTask = ['build']
if ( ! isModern ) defaultTask.unshift('clean')
if ( isDev ) defaultTask.push('serve')
gulp.task('default', gulp.series(defaultTask) )
