# hamura.css

CSS Library for CASIO PB-100.

---

## Caution - 注意

<strong>The class name of pbLCD.css has been changed since Version 0.9.19.</strong> Use `pbRng0-B` instead of `pbRng0B`. Browsers that support `[attr*=value]` have greatly reduced the CSS file size.

<strong>CSS tags have changed since version 0.9.0.</strong> Enclose `<style>` in `<noscript>` from version 0.9.0. See [HTML tags for import](#user-content-html-tags-for-import) for the full HTML tags.

---
<strong>Version 0.9.19 から pbLCD.css のクラス名が変更されています．</strong>`pbRng0B` に替わって `pbRng0-B` を使います．`[attr*=value]` をサポートするブラウザで CSS のファイルサイズを大きく削減出来ました．


<strong>Version 0.9.0 から CSS のタグが変更されています．</strong>バージョン0.9.0からは `<noscript>` で `<style>` を囲みます．完全な HTML タグは [HTML tags for import](#user-content-html-tags-for-import) を参照してください.

## Overview - 概要

hamura.css provides a reliable way to share CASIO PB-100 programs in HTML.
Pass on the PB-100 game culture to the next generation with hamura.css.

---

hamura.css は CASIO PB-100 用プログラムを HTML で共有する確かな方法を提供します．
hamura.css で PB-100 のゲーム文化を後世に伝えましょう．

## Demo and test pages - デモとテスト用のページ

 * [https version](https://pb-100.github.io/hamura.css/)

 * [http version](http://my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/), [http://t.co/zOPJBg5rGi](http://t.co/zOPJBg5rGi)

## Introductory article - 入門記事

[hamura.cssで始めるCASIO PB-100のためのHTML制作入門](//blog.pb-100.ga/2020/08/hamura.css.html)

## Library structure - ライブラリの構成

![pbList.css](https://3.bp.blogspot.com/-yqzH4PPbL8M/X0ZCcIQxbHI/AAAAAAAAAN4/TUsYiHt5xLw07_buBqH7qHmr09sxrIEuACLcBGAsYHQ/s160/pbList.css.png)
![pbFont.css](https://1.bp.blogspot.com/-M6Z32SpA_U8/X0ZCbivgO-I/AAAAAAAAANo/OCWRdwEcQHU6LJN-Z5fi-GXve0yRK9x3QCLcBGAsYHQ/s160/pbFont.css.png)
![pbLCD.css](https://2.bp.blogspot.com/-viSK8lFYTM8/X0ZCcIpL2gI/AAAAAAAAAN0/MxFJxkdpN0ALJ92ATxL5GCCrxXW4t3exgCLcBGAsYHQ/s160/pbLCD.css.png)
![pbChr.css](https://3.bp.blogspot.com/-uWQHJdHO2vo/X0ZCbnOJBDI/AAAAAAAAANw/3YDbUwkon6cruDiGaOiUAC-Y2ST6rxlrgCLcBGAsYHQ/s160/pbChar.css.png)
![pbKey.css](https://2.bp.blogspot.com/-TvC9KtOKm3M/X0ZCbqkKKsI/AAAAAAAAANs/HnObu2wL93EyX2e0nv6gUiNq9gZqVfDAQCLcBGAsYHQ/s160/pbKey.css.png)

The library is a collection of the following CSS.

---

ライブラリは次の CSS を纏めたものです．

1. [pbList.css] PB-100 Web font + code beautifier
2. [pbFont.css] PB-100 Web font
3. [pbLCD.css] LCD image
4. [pbChr.css] LCD charactor image
5. [pbKey.css] PB-100 Key

## API

### `PB100.prettify(htmlElement, ligaOnly)`

Code highlighting on dynamically added HTML elements after `onload`.
If `.pbList` and `.pbFont` are not present at the time of `onload`, `htmlElement` is highlighted after the Web font check has run.

---

`onload` 後に動的に追加された HTML 要素にコードハイライトを実施します．
`onload` 時点で `.pbList`, `.pbFont` が存在しない場合、Web フォントのチェックが走った後に `htmlElement` をハイライトをします．

~~~js
var elm = document.getElementById('pocket-basic-list'); // <pre id=pocket-basic-list></pre>
elm.className = 'pbList';
elm.innerHTML = '<code lang=en>' +
                    '<span class=pbRow>' +
                        '<span class=pbLine>10 </span>' +
                        '<span class=pbCmd>PRINT "HELLO, PB-100!"</span>' +
                    '</span>' +
                '</code>';
PB100.prettify(elm);
~~~

### `PB100.startBlinkingIfCursor(htmlElement)`

If necessary, blink dynamically added cursor elements.

---

必要ならば、動的に追加したカーソル要素を点滅させます。

~~~js
var elm = document.createElement('dfn');
elm.className = 'pbChrCS';
elm.innerHTML = '<blink>_</blink>';
document.body.appendChild(elm);
PB100.startBlinkingIfCursor(elm);
~~~

### `PB100.stopBlinkingIfCursor(htmlElement)`

~~~js
document.body.removeChild(elm);
PB100.stopBlinkingIfCursor(elm);
~~~

## Fallbacks by javascript - Javascript によるフォールバック

### Common - 共通

1. Set the appropriate style for IE8, IE9, Windows + Firefox ~88, Windows + Goanna that do not support `@media (forced-colors:active)` and `@media (-ms-high-contrast: active)` but do support high contrast mode.

---

1. `@media (forced-colors:active)` と `@media (-ms-high-contrast:active)` をサポートしないがハイコントラストモードをサポートする IE8, IE9, Windows + Firefox ~88, Windows + Goanna に対して、適切なスタイルを設定します．

### pbLCD.css

1. Generate equivalent elements in web browsers that do not support CSS Generated Block
2. Blinks cursor in less than Opera 7.20, which does not support animated GIF in the `background-image` (pbChr.css too)
3. Blinks cursor in IE9 and high contrast mode

---

1. CSS Generated Block をサポートしていない Web ブラウザは、同等の要素を生成します
2. `background-image` でのアニメーション GIF をサポートしない Opera 7.20 未満でカーソルを点滅させます(pbChr.css でも)
3. IE9 でハイコントラストモード時にカーソルを点滅させます

### pbList.css

1. Replace them with alternative character (Similarly for pbFont.css) in web browsers that do not support ligatures
2. If web font downloading is blocked, load CSS with embedded Data URI web fonts
3. Fallback with image replacement in web browsers that do not support web fonts

---

1. 合字に対応していない Web ブラウザでは、代替文字に置き換えます (pbFont.css も同様)
2. Web フォントのダウンロードがブロックされている場合、Data URI 化した Web フォントが埋め込まれた CSS を読み込みます
3. Web フォントをサポートしていない Web ブラウザでは、画像置換でフォールバックします

## Helper Web Applications - 支援アプリ

![pbList Editor](https://4.bp.blogspot.com/-dL9CCgoBBy4/X0c44mZCxAI/AAAAAAAAAOk/6CcvviZvr609L9X7vg881cbEl7MpnzAEACLcBGAsYHQ/s160/pbListEditor.png)

The Helper Applications are under development.

1. [pbLCD Maker] Helper application to get HTML for pbLCD.css
2. [pbList Editor](https://pb-100.ga/pbListEditor/) Helper application to get HTML for pbList.css

---

支援アプリは開発中です．

1. [pbLCD メーカー] pbLCD.css 用の HTML を記述するための支援アプリです
2. [pbList エディタ](https://pb-100.ga/pbListEditor/) pbList.css 用の HTML を記述するための支援アプリです

## How to import hamura.css from github.io to website - hamura.cssをgithub.ioからWebサイトにインポートする方法

### はじめに

Integrating a CSS library into a website without side effects is a difficult task for professionals.
If this explanation is difficult or if the following HTML cannot be added to the blog template due to the restrictions of the blog service, consider using the 4bit-city Blogger template (Release date undecided) that incorporates hamura.css.

---

CSS ライブラリを副作用なく Web サイトに組み込むのはプロにとっても簡単ではない仕事です．
この説明が難しい場合や、ブログサービスの制限でブログテンプレートに次の HTML を追加できない場合は、hamura.css を組み込んだ Blogger 用テンプレート 4bit-city(リリース日未定) の利用を検討下さい．

### Notes - 注意事項

When importing hamura.css from github.io, there are the following issues. Therefore, it is recommended to place hamura.css on your own web server.

1. github.io will redirect to https: when accessed with http: and will fail to load on older browsers.
2. Both Javascript and CSS are not fully compressed and have appropriate line breaks. This is to make it easier to see the diffs at build time and is not optimal for use on websites.

hamura.css also describes the style for dark mode. If your website does not yet support dark mode, set up at least the following styles.

---

hamura.css を github.io からインポートする場合、次の問題があります．この為、自前の Web サーバに hamura.css を配置することを推奨します．

1. github.io は http: でアクセスすると https: にリダイレクトされるため、古いブラウザで読み込みに失敗します．
2. Javascript, CSS ともに圧縮が不十分で適宜に改行を入れています．これはビルド時の Diff を確認しやすくする為であり Web サイトでの使用にとって最適ではありません．

また hamura.css にはダークモード用のスタイルが記述されています．ご利用の Web サイトでダークモードのサポートが未だの場合は、少なくとも次のスタイルを設定しておきます．

---

~~~css
@media only screen and (prefers-color-scheme: dark) {
    .pbList { background: hsl(0, 0%, 0%); color : hsl(0, 0%, 87%) } /* Use hsl not to apply in Opera ~9.27 */
}
~~~

### HTML tags for import

Immediately after `</body>`, write the following tags.

---

`</body>` の直後に、次に示すタグを書きます．

~~~html
</body>
<!--[if IE 5]>
<style type="text/css">
@media tty {
i {content : "\";/*" "*/}}; @import '//pb-100.github.io/hamura.css/ie5win.css'; {;}/*";}
}/* */
@media tty {
i {content : "\";/*" "*/}}@m; @import '//pb-100.github.io/hamura.css/ie55.css'; /*";}
}/* */
</style>
<![endif]-->
<!--[if IE 6]><link href="//pb-100.github.io/hamura.css/ie6.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if (IE 7)|(IEMobile)]><link href="//pb-100.github.io/hamura.css/ie7.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if IE 8]><link href="//pb-100.github.io/hamura.css/ie8.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if IE 9]><link href="//pb-100.github.io/hamura.css/ie9.css" rel="stylesheet" type="text/css"><![endif]-->
<!--[if !IE]><!-->
<noscript><style media='screen,handheld,projection,tv,print' type="text/css">
/*\*//*/ @import "//pb-100.github.io/hamura.css/ie5mac.css"; /**/ /*\*/
@import "//pb-100.github.io/hamura.css/modern.css";
@media only screen and (prefers-color-scheme: dark) {
    .pbList { background: hsl(0, 0%, 0%); color : hsl(0, 0%, 87%) } /* Use hsl not to apply in Opera ~9.27 */
}
/**/
</style></noscript><!--<![endif]-->
<script src="//pb-100.github.io/hamura.css/hamura.js"></script>
</html>
~~~

`<noscript>` was added in Version 0.9.0.

---

Version 0.9.0 で `<noscript>` が追加されました．

## References - 参照プロジェクト

* [4bit city](https://github.com/pb-100/4bit-city) Blogger templete
* [Universe of CASIO Pocket Computer PB-100](https://pb-100.ga/) pbrocky's homepage

## Old Version - 旧バージョン

 * [Old version of CSS library for CASIO PB-100](https://pbrocky.github.io/pb-100/)

## Installation

~~~
> git clone https://github.com/pb-100/hamura.css.git --recursive

> npm install
~~~

### Demo locally

Start a local web server. Then access [localhost:8022](http://localhost:8022/) in your browser.

~~~
> npm start
~~~

## How to build CSS - CSS のビルドの方法

1. CSS is written in SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) expanded comments
2. Generate the browser-specific .scss by gulp-iz-preprosessor
3. Compile the generated .scss
4. Finalize with ./.submodules/web-doc-base/js-buildtools/gulp-finalize-css.js

---

1. CSS は SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) 拡張コメントで書かれています
2. gulp-iz-preprosessor でブラウザ別の .scss を生成します
3. 出来た .scss をコンパイルします
4. ./.submodules/web-doc-base/js-buildtools/gulp-finalize-css.js でファイナライズします

See [gulpfile.js](./gulpfile.js).

~~~
> gulp css
~~~

## How to build Javascript - Javascript のビルドの方法

See [gulpfile.js](./gulpfile.js).

~~~
> gulp js
~~~

## How to build JavaScript for testing - テスト用の Javascript のビルドの方法

~~~
> gulp test0
> gulp test1
> gulp test2

or

> gulp all
~~~

Build ./docs/hamura.js and the following test files.

---

./docs/hamura.js と次のテスト用ファイルをビルドします．

1. ./docs/webfont-test.js | [test page](https://pb-100.github.io/hamura.css/webfont-test.html)
2. ./docs/webfont-blocked-test.js | [test page](https://pb-100.github.io/hamura.css/webfont-blocked-test.html)
3. ./docs/nowebfont-fallback-test.js | [test page](https://pb-100.github.io/hamura.css/nowebfont-fallback-test.html)

## How to create Web font files

[docs/icomoon.md](./docs/icomoon.md)

## For development

1. [hamura.cssのマルチブラウザ技術、pbLCD.cssとpbChr.css, pbList.cssの画像フォールバックの辺りの](https://blog.pb-100.ga/2022/04/multi-browser-techniques-of-hamuracss.html)
2. [マイコンプログラムをHTMLで表示するCSSのポイント、禁則処理、コピーペーストなど](https://blog.pb-100.ga/2020/08/CSS-for-MyCom.html) About pbList.css

## Licence - ライセンス

[New BSD License](http://opensource.org/licenses/BSD-3-Clause)

## Dependency Licenses

### Modernizr

|         |     |
|:--------|-----|
| Author  | Modernizr |
| Website | https://github.com/Modernizr/Modernizr |
| License | [MIT License](https://opensource.org/licenses/MIT) |

### JavaScript code to detect available availability of a particular font in a browser using JavaScript and CSS.

|         |     |
|:--------|-----|
| Author  | Lalit Patel |
| Website | http://www.lalit.org/lab/javascript-css-font-detect/ |
| License | [Apache Software License 2.0](http://www.apache.org/licenses/LICENSE-2.0) |

### uupaa.js 完全に状況を掌握した画像の遅延読み込みの実現

|         |     |
|:--------|-----|
| Author  | uupaa |
| Website | http://d.hatena.ne.jp/uupaa/20080413/1208067631 |
| License | MIT License? ([uupaa.js](https://code.google.com/archive/p/uupaa-js/) が MIT License の為多分) |

### web-doc-base

|         |     |
|:--------|-----|
| Author  | itozyun |
| Website | https://github.com/itozyun/web-doc-base |
| License | [MIT License](https://opensource.org/licenses/MIT) |

## Rreferenced code

### Detecting if images are disabled in browsers > Checking for Windows High Contrast

|         |     |
|:--------|-----|
| Author  | Steve Faulkner |
| Website | https://developer.paciellogroup.com/blog/2011/10/detecting-if-images-are-disabled-in-browsers/ |

### Function.prototype.applyとかArray.prototype.spliceのIE5用のコード

|         |     |
|:--------|-----|
| Author  | ofk |
| Website | https://ofk.hatenadiary.org/entry/20080904/1220485969 |

### Array.prototype.indexOf() polyfill

|         |     |
|:--------|-----|
| Author  | MDN |
| Website | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf |

### hir90の日記 > [ネット]Javascript高速化・文字列の繰り返しを得る

|         |     |
|:--------|-----|
| Author  | hir90 |
| Website | https://web.archive.org/web/20111110062428/http://d.hatena.ne.jp/hir90/20080620/1213987444 |

## Author - 作者

pbrocky : [Homepage](https://pb-100.ga), [Twitter](https://twitter.com/pbrocky), [Blog](https://blog.pb-100.ga), [Github](https://github.com/pbrocky)

