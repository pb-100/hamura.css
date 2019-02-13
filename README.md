# hamura.css

CSS Library for CASIO PB-100.

---

## Overview - 概要

Tell PB-100 game culture to future generations.
Provides a general way to share the CASIO PB-100 programs on the Internet.


PB-100のゲーム文化を後世に伝えます。
CASIO PB-100 プログラムをインターネット上で共有する方法を提供します。

## CSS Libraries

1. [pbLCD] LCD image
2. [pbChr] LCD charactor image
3. [pbList] PB-100 Web font + code beautifier
4. [pbFont] PB-100 Web font
5. [pbKey] PB-100 Key

## Fallbacks by Javascript

### pbLCD

1. Web browsers that do not support opacity use transparent PNG
2. Web browsers that do not support content generate equivalent elements
3. In Opera 7.2 and later, transparent png of background-image is not supported, so replace it with &lt;img&gt;.

---

1. opacity をサポートしていない Web ブラウザでは、透明な PNG を使用します
2. content をサポートしていない Web ブラウザは、同等の要素を生成します
3. Opera 7.2 以下は background-image で透過 png をサポートしないため &lt;img&gt; 要素で置換します

### pbList

1. If the Web font does not support ligatures, replace them with alternative characters (Similarly for pbFont)
2. If web font downloading is blocked, load CSS with web font embedded
3. In an environment that does not support Web fonts, replace with images

---

1. Web フォントが合字に対応していない場合、代替文字に置き換えます (pbFont も同様)
2. Web フォントのダウンロードがブロックされている場合、Web フォントを埋め込んだ CSS を読み込みます
3. Web フォントをサポートしない環境では画像で置換します

## Helper Web Applications - 支援アプリ

1. [pbLCD Maker] Helper application to get HTML for pbLCD
2. [pbList Editor] Helper application to get HTML for pbList

---

1. [pbLCD メーカー] pbLCD 用の HTML を記述するための支援アプリです
2. [pbList エディタ] pbList 用の HTML を記述するための支援アプリです

## Demo

[https: demo.html](https://pb-100.github.io/hamura.css/demo.html)

[http: demo.html](http://my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/demo.html) ,  [http://t.co/Q0zQRb3xzk](http://t.co/Q0zQRb3xzk)

## References - 参照プロジェクト

* [4bit city](https://github.com/pb-100/4bit-city) Blogger templete
* [Universe of CASIO Pocket Computer PB-100](http://www.geocities.jp/pbrocky544/) pbrocky's homepage

## Old Version

[Old version of CSS library for CASIO PB-100](https://pbrocky.github.io/pb-100/)

## How the CSS build - CSS のビルドの方法

1. CSS is written in SCSS + iz-preprosessor Expanded Comments
2. Install [iz-preprosessor](https://marketplace.visualstudio.com/items?itemName=itozyun.iz-preprocessor) to Visual Studio Code
3. Generate the browser-specific .scss by iz-preprosessor
4. Compile the generated .scss

---

1. CSS は SCSS + iz-preprosessor 拡張コメントで書かれています
2. VS Code 拡張の [iz-preprosessor](https://marketplace.visualstudio.com/items?itemName=itozyun.iz-preprocessor) をインストールします
3. iz-preprosessor でブラウザ別の .scss を生成します
4. 出来た .scss をコンパイルします

### vscode settings.json for precompile .scss files

~~~json
{
    "izPreprocessor.tasks" : {
        "scss" : [
            {
                "find" : {
                    "rootPath" : [
                        "./pbKey/scss", "./pbLCD/scss", "./pbList/scss"
                    ],
                    "include" : "*.scss",
                    "exclude" : "node_modules"
                },
                "output"  : "R:/precompiled"
            }
        ]
    }
}
~~~

### gulpfile.js

~~~javascript
var gulp      = require('gulp'),
    sass      = require("gulp-sass"),
    cleanCSS  = require("gulp-clean-css"),
    mmq       = require("gulp-merge-media-queries"),
    plumber   = require("gulp-plumber");

// .scss -> .css して debug 用に配置
gulp.task('sass', function() {
  return gulp.src(['R:/precompiled/*.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(cleanCSS({
      compatibility : { properties : { ieFilters : true } },
      //  https://github.com/jakubpawlowicz/clean-css#optimization-levels
      level: {
        1: {
          // rounds pixel values to `N` decimal places; `false` disables rounding; defaults to `false`
          roundingPrecision : 3
        },
        2: {
          removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
          removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
          removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
          
          mergeSemantically: true, // controls semantic merging; defaults to false
          // controls unused at rule removing; defaults to false (available since 4.1.0)
          removeUnusedAtRules: true, // ここが true だと DATA URI の Web Font が削除される。
          restructureRules: true // controls rule restructuring; defaults to false
        }
      }
    }))
    .pipe(mmq())
    .pipe(cleanCSS({
      compatibility : { properties : { ieFilters : true } },
      level: {
        1: {
          all: false, // set all values to `false`
          removeWhitespace: true // controls removing unused whitespace; defaults to `true`
        }
      }
    }))
    .pipe(gulp.dest('docs'));
~~~

## How the Javascript Build

~~~bat
@echo off

type nul > R:\temp.js

echo (function(ua,window,document,parseFloat,Date,undefined){; >> R:\temp.js
type common.js\_arrayPrototype.js >> R:\temp.js
type common.js\_CONST.js          >> R:\temp.js
type common.js\_global.js         >> R:\temp.js
type common.js\_util.js           >> R:\temp.js
type common.js\CHAR_TABLE.js      >> R:\temp.js
type common.js\CSSOM.js           >> R:\temp.js
type common.js\DOM.js             >> R:\temp.js
type common.js\Timer.js           >> R:\temp.js
type pbLCD\js\checkActiveX.js     >> R:\temp.js
type pbLCD\js\fallback.js         >> R:\temp.js
type pbList\js\prettify.js        >> R:\temp.js
type pbList\js\webfontTest.js     >> R:\temp.js
echo })(ua,window,document,parseFloat,Date); >> R:\temp.js

java -jar C:\ClosureCompiler\closure-compiler-v20180910.jar --js R:\temp.js --js_output_file docs/hamura.js --language_in ECMASCRIPT3 --language_out ECMASCRIPT3 --externs closureCompiler/externs.js --compilation_level ADVANCED
REM --formatting pretty_print
del R:\temp.js
~~~

## Licence

[New BSD License](http://opensource.org/licenses/BSD-3-Clause)

## Author

[pbrocky](https://github.com/pbrocky)

