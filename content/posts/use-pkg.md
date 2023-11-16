## 目的

有时候一些兄弟姐妹想要你做一些简单的效率工具，他们又不太懂电脑，只知道点击图标或者顶多知道双击可执行文件（特别是用 Windows 的那帮兄弟姐妹）。这个时候，你的技术栈里面虽然有各种牛逼的工具，但是想想还是 JS 最快最方便。花了 1～2 天搞定之后，怎么给他们用呢？不会教他们装个 NodeJS，然后再在控制台里面运行安装和执行命令吧，万一安装太慢装了几个小时，那不被骂死，甚至出现一些问题就更麻烦了，所以最好有一个打包工具，打包成一个可执行文件，双击就好了。

这个时候，你需要的就是 pkg 。

## 步骤

### 1. 安装 pkg

官网：<https://github.com/vercel/pkg>。

```bash
npm -g install pkg
```

### 2. 下载资源包

为了避免下载对应的资源包太慢，我们这里可以提前去这个地址下载，<https://github.com/vercel/pkg-fetch/releases>。

需要注意的是你的 pkg 的版本需要找到对应的内容，写下这段文字的时候是 v3.5 ,所以要去找 v3.5 的 Assets 里面的对应的文件下载。

下载之后放入对应.pkg-cache文件夹（没有就创建一个）中：

```bash
cd ~/.pkg-cache/v3.5
mv ~/Download/node-v18.5.0-win-x64 ./fetched-v18.5.0-win-x64
```

注意这里要修改文件名为 fetched-* 开头。

### 3. Babel

如果你喜欢 ESM 的话，就需要使用 Babel 来处理，将 ESM 编译为 CommonJS 。否则你会遇到各种不能编译的问题。

**注意**，你 dependencies 中的包也需要支持 CommonJS ， 如果不支持，需要找到其可以支持的版本，例如：chalk v5 以上就只支持 ESM ， 所以需要降级到 v4 版本。

在项目目录添加 babel.config.json 文件

```json
{
    "presets": [
        [
            "@babel/preset-env"
        ]
    ],
    "plugins": [
        "@babel/plugin-transform-modules-commonjs"
    ]
}
```

执行以下命令

```bash
npm i --save-dev @babel/cli @babel/core @babel/preset-env @babel/plugin-transform-modules-commonjs
./node_modules/.bin/babel src --out-dir build/src
```

所有转换后的文件都存放到了 build/src 中

### 4. 执行

执行起来很简单，在项目目录下输入指令即可：

```bash
pkg build/src/index.js -t node18-macos-x64,node18-win-x64
```

不出意外，就能在项目目录下看到 index-win.exe 和 index-macos 这两个文件了。

可以直接运行看一下结果是否如预期。

### 5. 使用 Gulp 将一切串起来

这里使用 Gulp 将编译、打包、清理、压缩一起做了，最后输出成 zip 这样方便传输使用。

预想项目目录结构如下：

```text
data
 \ some.db
 \ some.json
node_modules
src
 \ app.js
 \ lib.js
 \ log.js
 \ db.js
 \ ...
.env
.env.local
gulpfile.js
package.json
```

预想运行时目录结构如下：

```text
build -
  \ .env
  \ app.exe
  \ other sources
```

app.exe 就是我们 pkg 打包后的可执行文件

使用命令安装 gulp 和 execa（用来运行命令行指令）

```bash
npm install --save-dev gulp gulp-babel gulp-rename gulp-zip execa
```

在目录中创建文件 gulpfile.js , 然后就可以编写打包程序了，这里直接上一个模板，可以参考修改：

```js
import fs from 'fs';
import { execa } from 'execa';
import gulp from 'gulp';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import zip from 'gulp-zip';

function prepare(cb) {
    fs.rmSync('./build', { recursive: true, force: true });
    return gulp.src(['src/*.js']).pipe(babel()).pipe(gulp.dest('build/src'));
};

async function pkg() {
    await execa('pkg', ['build/src/index.js', '-t', 'node18-macos-x64,node18-win-x64'], { stdio: 'inherit' })
}

function move() {
    gulp.src(['index-macos']).pipe(rename('app')).pipe(gulp.dest('build'));
    gulp.src(['index-win.exe']).pipe(rename('app.exe')).pipe(gulp.dest('build'));
    gulp.src(['.env.local', '.env', '!**/.DS_Store']).pipe(gulp.dest('build'));
    return gulp.src(['data/**/*']).pipe(gulp.dest('build/data'));
};

function clean(cb) {
    fs.rmSync('./build/src', { recursive: true, force: true });
    fs.rmSync('index-macos');
    fs.rmSync('index-win.exe');
    cb();
}

function dist(cb) {
    return setTimeout(() => {
        const filename = 'app.zip';
        gulp.src(['build/**/*', 'build/.env', 'build/.env.local']).pipe(zip(filename)).pipe(gulp.dest('build'));
        cb();
    }, 1500);
}

export default gulp.series(prepare, pkg, move, clean, dist);

```

代码比较简单直观，就不一一解释了。然后在项目目录执行：

```bash
gulp
```

完成之后，在 build 文件夹中即能看到 dist.zip ，可以扔给你不懂程序的小伙伴玩耍了。

## 一点感受

使用 pkg 的场景我个人认为就是一些简单的工具程序，例如：爬虫、批量处理文件、生成指定格式文件等等之类的不复杂的应用。

如果是 Web 程序，不建议使用 pkg ，直接交给运维人员或者自己部署会更好。
如果是应用程序，例如：electron，则有对应的打包工具，也不需要 pkg 。
