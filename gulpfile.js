const gulp=require('gulp');//引入gulp;必须品;
const uglify=require('gulp-uglify');//压缩js;
const htmlminify=require('gulp-html-minify');//压缩html;
const babel=require('gulp-babel');//es6转es5;
const imagemin=require('gulp-imagemin');//压缩图片;
const rev = require('gulp-rev');    //生成文件版本号;
const concat=require('gulp-concat');//合并文件;
const rename=require('gulp-rename');//重名文件夹
const revCollector=require('gulp-rev-collector');//
var del = require('del');
var connect = require('gulp-connect');
// gulp.task():创建一个任务
//src():查找文件;
//pipe():下一步;

    
gulp.task('minijs',function(){
    gulp.src('app/static/*.js')
    // .pipe(babel({                   //es6转es5;
    //     presers:['@babel/env']
    // }))
    // .pipe(concat('all.js')) //先合并在压缩;
    // .pipe(uglify({
    //     mangle: false,               // 是否修改变量名，默认为 true
    //     compress: true,             // 是否完全压缩，默认为 true
    //     preserveComments: 'all'     // 保留所有注释
    // }))
    .on('error',function(err){      //监听错误并输出;
        console.log(`错误${err.message}在第${err.line}行,第${err.col}列`)
        this.emit()
    })
    // .pipe(rev())                    //压缩完成后生成一个版本号;
    // .pipe(rename('all.min.js')) //重命名文件;
    // .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload())  //任务压缩完成后重加载;
    // .pipe(rev.manifest())    //生成版本号;
    // .pipe(gulp.dest('rev'))  //输出到res文件夹
})
//合并文件
gulp.task('concatjs',()=>{
    gulp.src('app/static/*.js')
    .pipe(concat('all.js'))//直接合并static文件夹下的所有js文件;
    .pipe(gulp.dest('dest'))
})


//压缩HTML
gulp.task('minihtml',function(){
    gulp.src(['app/**/*.json','*.html']) //映射rev下面所有的json文件;与HTML数据同步;
    // .pipe(revCollector())            //执行
    // .pipe(htmlminify())
    .on('error',function(err){      //监听错误并输出;
        console.log(`错误${err.message}在第${err.line}行,第${err.col}列`)
        this.emit()
    })
    // .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})
//压缩img
gulp.task('minimg',function(){
    gulp.src('app/**/*.{jpg,png,gif,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
    // .pipe(connect.reload())
})

//开启服务器;
gulp.task('connect', function () {
    connect.server({
        root: 'app',       //展示dist文件;
        port: '7777',       //端口号
        livereload: true    //开启服务器
    });
});

//监听文件;
gulp.task('watch', function () {
    // 监听指定文件,如果文件改变;重新执行指定任务;
    gulp.watch('app/*.html','minihtml') 
    gulp.watch('app/**/*.js' 'minijs')
});

//删除指定文件夹;
gulp.task('clean',()=>{
    del(['dist','rev'])
})

gulp.task('default', ['connect','watch']);

//项目初始;按[]的任务顺序从左到右依次执行;
gulp.task('start',['minijs','minimg','minihtml','watch','connect'])
