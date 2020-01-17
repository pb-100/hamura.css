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

The library is a collection of the following CSS

---

ライブラリは次の CSS を纏めたものです

1. [pbLCD.css] LCD image
2. [pbChr.css] LCD charactor image
3. [pbList.css] PB-100 Web font + code beautifier
4. [pbFont.css] PB-100 Web font
5. [pbKey.css] PB-100 Key

## Fallbacks by javascript - Javascript によるフォールバック

### pbLCD.css

1. Web browsers that do not support opacity use transparent PNG
2. Web browsers that do not support content generate equivalent elements
3. In Opera 7.2 and later, transparent png of <code>background-image</code> is not supported, so replace it with &lt;img&gt;.

---

1. opacity をサポートしていない Web ブラウザでは、透明な PNG を使用します
2. content をサポートしていない Web ブラウザは、同等の要素を生成します
3. Opera 7.2 以下は <code>background-image</code> で透過 png をサポートしないため &lt;img&gt; 要素で置換します

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
2. [pbList Maker] Helper application to get HTML for pbList.css

---

支援アプリは開発中です。

1. [pbLCD メーカー] pbLCD.css 用の HTML を記述するための支援アプリです
2. [pbList メーカー] pbList.css 用の HTML を記述するための支援アプリです

## Demo and test pages - デモとテスト用のページ

 * [https page](https://pb-100.github.io/hamura.css/)

 * [http page](http://my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/), [http://t.co/zOPJBg5rGi](http://t.co/zOPJBg5rGi)

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

See [gulpfile.js](https://github.com/pb-100/hamura.css/blob/master/gulpfile.js).

~~~
> gulp css
~~~

## How to build Javascript - Javascript のビルドの方法

See [gulpfile.js](https://github.com/pb-100/hamura.css/blob/master/gulpfile.js).

~~~
> gulp js
~~~

## How to build JavaScript for testing - テスト用の Javascript のビルドの方法

./test/webfont-blocked-test.js | [test page](https://pb-100.github.io/hamura.css/webfont-blocked-test.html)

~~~
> gulp test1
~~~

.test/nowebfont-fallback-test.js | [test page](https://pb-100.github.io/hamura.css/nowebfont-fallback-test.html)

~~~
> gulp test2
~~~

## Licence - ライセンス

[New BSD License](http://opensource.org/licenses/BSD-3-Clause)

## Author - 作者

pbrocky : [Homepage](https://pb-100.ga), [Twitter](https://twitter.com/pbrocky), [Blog](https://pbrocky.blogspot.com), [Github](https://github.com/pbrocky)

