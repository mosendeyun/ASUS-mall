var gulp = require('gulp');//引入gulp
var uglify = require('gulp-uglify');//压缩js
var babel = require('gulp-babel');//es6转译
var connect = require('gulp-connect');//服务器
var concat = require('gulp-concat');//合并
var minicss = require('gulp-clean-css');//引入css
var minihtml = require('gulp-html-minify');//引入html
var del = require('del');//删除整个文件
const rev = require('gulp-rev');//添加版本号
var revCollector = require('gulp-rev-collector');//修改路径版本号
var run = require('run-sequence');//异步执行
var miniimg = require('gulp-imagemin');//图片压缩
var less = require('gulp-less');//


//压缩js
gulp.task('minijs',function(){
    gulp.src('app/static/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/static/'))
    .pipe(connect.reload())
})
//压缩css
gulp.task('minicss',function(){
    gulp.src('app/static/**/*.css')
    .pipe(minicss())
    .pipe(gulp.dest('dist/static/'))
    .pipe(connect.reload())
})

gulp.task('less', function () {
      gulp.src('app/static/**/*.css')
      .pipe(less())
      .pipe(gulp.dest('dist/static'));
  });

//压缩HTML
gulp.task('minihtml',function(){
    gulp.src('app/*.html')
    .pipe(minihtml())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())//实时刷新
})
//图片压缩
gulp.task('miniimg',function(){
    gulp.src('app/static/images/*')
    .pipe(gulp.dest('dist/static/images'))
    .pipe(connect.reload())
})


//监听实时更新
gulp.task('watch',function(){
    gulp.watch('dist/static/js/*.js',['minijs'])
    gulp.watch('dist/static/**/*.css',['minicss'])
    gulp.watch('dist/static/images/*',['miniimg'])
    gulp.watch('dist/*.html',['minihtml'])
})

//打开服务器
gulp.task('connect',function(){
    connect.server({
        root: 'dist',//服务器默认文件夹
        port: '7777',//端口号
        livereload: true
    })
})


//删除文件
  gulp.task('clean', () => {
    del(['dist', 'rev'])
})

//所有文件实时更新
gulp.task('default', function() {
   return run('clean',['minijs','miniimg','minicss'],
    'minihtml',
    'watch',
    'connect',
    )
  })
  gulp.task('dev',function(){
     run(['clean'],['minijs','miniimg','minicss','minihtml'],['watch','connect'])
  })




