// www/gulpfile.mjs

import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import { deleteAsync } from 'del';
import browserSyncModule from 'browser-sync';

// Initialize BrowserSync
const browserSync = browserSyncModule.create();

// Paths configuration
const paths = {
  html: {
    src: ['./*.html', './pages/**/*.html'], // All HTML files in root and pages
    dest: './dist',
  },
  assets: {
    src: [
      './css/**/*', // All CSS files
      './js/**/*', // All JS files
      './img/**/*', // All image files
      './pkg/**/*', // All WebAssembly/Rust package files
      //'./favicon.ico', // Favicon
    ],
    dest: './dist',
  },
};

// Clean the dist directory
export const clean = () => deleteAsync(['./dist']);

// Process HTML files and include partials
export const html = () => {
  return gulp.src(paths.html.src, { base: './' }) // Preserve folder structure
    .pipe(fileInclude({
      prefix: '@@',         // Prefix for the include directive
      basepath: '@file',    // Base path to resolve the partials
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
};
// Copy all asset files to dist
export const assets = () => {
  return gulp.src(paths.assets.src, { base: './', allowEmpty: true }) // Preserve folder structure and allow empty
    .pipe(gulp.dest(paths.assets.dest))
    .pipe(browserSync.stream())
    .on('data', function(file) {  // Add log for debugging
      console.log('Copying asset:', file.path);
    });
};

// Watch files for changes
export const watchFiles = () => {
  gulp.watch(['./*.html', './pages/**/*.html', './partials/**/*.html'], html); // Watch HTML files
  gulp.watch(paths.assets.src, assets); // Watch asset files
};

// Initialize BrowserSync and serve from dist
export const serve = () => {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    port: 8137,
  });

  watchFiles();
};

// Define complex tasks
export const build = gulp.series(clean, gulp.parallel(html, assets));
export const watch = gulp.series(build, serve);

// Export default task
export default watch;