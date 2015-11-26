import {join} from 'path';
import {APP_SRC, APP_DEST, TOOLS_DIR} from '../config';
import {templateLocals, tsProjectFn} from '../utils';

const ES6_IMPORT_REGEX = /\bimport\s+(?:.+\s+from\s+)?[\'"]((?!.*angular2)[^"\']+)["\']/g;


// gulp.task('clean:typings', function(done) {
//   del(['typings/ionic'], done);
// });

export = function Ionic2GenerateDts(gulp, plugins) {
  return function () {
    let src = [
                  'node_modules/angular2/**/*.d.ts', 
                  'node_modules/ionic-framework/dist/src/typescript/**/*.ts'
              ];

    let tsResult = gulp.src(['../../tools/typings/ionic-framework/dist/src/typescript/**/*.ts'])
      .pipe(plugins.typescript({
            declaration: true,
            noExternalResolve: true
        }));

    return tsResult.dts
            // .pipe(plugins.gulpClipEmptyFiles())
            // .pipe(plugins.gulpWrap('\n// Source code:\n// <%= file.relative %>\n\n<%= contents %>'))
            // .pipe(plugins.gulpDeleteLines({
            //     'filters': [
            //         ES6_IMPORT_REGEX
            //         // , ES6_EXPORT_ALL_REGEX
            //         ]
            //     }))
            // .pipe(plugins.gulpInsert.transform(function(contents, file){
            //         var res = contents.match(ES6_IMPORT_REGEX);
                    
            //         console.log(res);
            //         return '// ' + file.path + '\n\n' + contents;
            //     }))
            //.pipe(plugins.gulpConcat('ionic2.d.ts'))
            .pipe(gulp.dest('tools/typings/ionic2'));
  };
};
