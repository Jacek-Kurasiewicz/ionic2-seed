import {join} from 'path';
import {APP_SRC, IONIC2_SASS_SRC, IONIC2_SASS_SRC_EXCLUDES} from '../config';

export = function buildSassDev(gulp, plugins, option) {
  return function () {
    return gulp.src([
        join(APP_SRC, '**', '*.scss'),
        IONIC2_SASS_SRC
        ])
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest(APP_SRC));
  };
}
