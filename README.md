# hamura.css

CSS Library for CASIO PB-100.

---

## Overview - 概要

Tell PB-100 game culture to future generations.
Provides a general way to share the CASIO PB-100 programs on the Internet.

---

PB-100のゲーム文化を後世に伝えます。
CASIO PB-100 プログラムをインターネット上で共有する方法を提供します。

## Library structure - ライブラリの構成

The library is a collection of the following CSS.

---

ライブラリは次の CSS を纏めたものです。

1. [pbLCD.css] LCD image
2. [pbChr.css] LCD charactor image
3. [pbList.css] PB-100 Web font + code beautifier
4. [pbFont.css] PB-100 Web font
5. [pbKey.css] PB-100 Key

## API

### `PB100.prettify(htmlElement)`

Code highlighting on dynamically added HTML elements after onload.

---

onload 後に動的に追加された HTML 要素にコードハイライトを実施します。

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

## Fallbacks by javascript - Javascript によるフォールバック

### Common - 共通

1. Set the appropriate style for IE8, IE9, and Windows Firefox that do not support `@media (-ms-high-contrast: active)` but do support high contrast mode.

---

1. `@media (-ms-high-contrast:active)` をサポートしないがハイコントラストモードをサポートする IE8, IE9, Windows Firefox に対して、適切なスタイルを設定します。

### pbLCD.css

1. Web browsers that do not support `opacity` use transparent PNG
2. Web browsers that do not support `content` generate equivalent elements

---

1. `opacity` をサポートしていない Web ブラウザでは、透明な PNG を使用します
2. `content` をサポートしていない Web ブラウザは、同等の要素を生成します

### pbList.css

1. If the Web font does not support ligatures, replace them with alternative characters (Similarly for pbFont.css)
2. If web font downloading is blocked, load CSS with web font embedded
3. In an environment that does not support Web fonts, replace with images

---

1. Web フォントが合字に対応していない場合、代替文字に置き換えます (pbFont.css も同様)
2. Web フォントのダウンロードがブロックされている場合、Web フォントを埋め込んだ CSS を読み込みます
3. Web フォントをサポートしない環境では画像で置換します

## Helper Web Applications - 支援アプリ

The Helper Applications are under development.

1. [pbLCD Maker] Helper application to get HTML for pbLCD.css
2. [pbList Editor](https://pb-100.ga/pbListEditor/) Helper application to get HTML for pbList.css

---

支援アプリは開発中です。

1. [pbLCD メーカー] pbLCD.css 用の HTML を記述するための支援アプリです
2. [pbList エディタ](https://pb-100.ga/pbListEditor/) pbList.css 用の HTML を記述するための支援アプリです

## Demo and test pages - デモとテスト用のページ

 * [https version](https://pb-100.github.io/hamura.css/)

 * [http version](http://my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/), [http://t.co/zOPJBg5rGi](http://t.co/zOPJBg5rGi)

## How to import hamura.css from github.io to website - hamura.cssをgithub.ioからWebサイトにインポートする方法

### はじめに

Integrating a CSS library into a website without side effects is a difficult task for professionals.
If this explanation is difficult or if the following HTML cannot be added to the blog template due to the limitation of the blog service, consider using the 4bit-city Blogger template (Release date undecided) that incorporates hamura.css.

---

CSS ライブラリを副作用なく Web サイトに組み込むのはプロにとっても簡単ではない仕事です。
この説明が難しい場合や、ブログサービスの制限でブログテンプレートに次の HTML を追加できない場合は、hamura.css を組み込んだ Blogger 用テンプレート 4bit-city(リリース日未定) の利用を検討下さい。

### Notes - 注意事項

When importing hamura.css from github.io, there are the following issues. Therefore, it is recommended to place hamura.css on your own web server.

1. github.io will redirect to https: when accessed with http: and will fail to load on older browsers.
2. Both Javascript and CSS are not fully compressed and have appropriate line breaks. This is to make it easier to see the diffs at build time and is not optimal for use on websites.

hamura.css also describes the style for dark mode. If your website does not yet support dark mode, set up at least the following styles.

---

hamura.css を github.io からインポートする場合、次の問題があります。この為、自前の Web サーバに hamura.css を配置することを推奨します。

1. github.io は http: でアクセスすると https: にリダイレクトされるため、古いブラウザで読み込みに失敗します。
2. Javascript, CSS ともに圧縮が不十分で適宜に改行を入れています。これはビルド時の Diff を確認しやすくする為であり Web サイトでの使用にとって最適ではありません。

また hamura.css にはダークモード用のスタイルが記述されています。ご利用の Web サイトでダークモードのサポートが未だの場合は、少なくとも次のスタイルを設定しておきます。

---

~~~css
@media only screen and (prefers-color-scheme: dark) {
    .pbList { background: #000; color : #ddd }
}
~~~

### HTML tags for import

Immediately after `</body>`, write the following tags.

---

`</body>` の直後に、次に示すタグを書きます。

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
<style media='screen,handheld,projection,tv,print' type="text/css">
/*\*//*/ @import "//pb-100.github.io/hamura.css/ie5mac.css"; /**/ /*\*/
@import "//pb-100.github.io/hamura.css/modern.css";
@media only screen and (prefers-color-scheme: dark) {
    .pbList { background: #000; color : #ddd }
}
/**/
</style><!--<![endif]-->
<script src="//pb-100.github.io/hamura.css/hamura.js"></script>
</html>
~~~

## References - 参照プロジェクト

* [4bit city](https://github.com/pb-100/4bit-city) Blogger templete
* [Universe of CASIO Pocket Computer PB-100](https://pb-100.ga/) pbrocky's homepage

## Old Version - 旧バージョン

 * [Old version of CSS library for CASIO PB-100](https://pbrocky.github.io/pb-100/)

## How to build CSS - CSS のビルドの方法

1. CSS is written in SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) expanded comments
2. Generate the browser-specific .scss by gulp-iz-preprosessor
3. Compile the generated .scss
4. Finalize with ./web-doc-base/gulp-finalize-css.js

---

1. CSS は SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) 拡張コメントで書かれています
2. gulp-iz-preprosessor でブラウザ別の .scss を生成します
3. 出来た .scss をコンパイルします
4. ./web-doc-base/gulp-finalize-css.js でファイナライズします。

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
> gulp all
~~~

Build ./docs/hamura.js and the following test files.

---

./docs/hamura.js と次のテスト用ファイルをビルドします。

1. ./docs/test/webfont-test.js | [test page](https://pb-100.github.io/hamura.css/webfont-test.html)
2. ./docs/test/webfont-blocked-test.js | [test page](https://pb-100.github.io/hamura.css/webfont-blocked-test.html)
3. ./docs/test/nowebfont-fallback-test.js | [test page](https://pb-100.github.io/hamura.css/nowebfont-fallback-test.html)

## Licence - ライセンス

[New BSD License](http://opensource.org/licenses/BSD-3-Clause)

## Author - 作者

pbrocky : [Homepage](https://pb-100.ga), [Twitter](https://twitter.com/pbrocky), [Blog](https://blog.pb-100.ga), [Github](https://github.com/pbrocky)

