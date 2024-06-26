# hamura.css

CSS Library for CASIO PB-100.

---

## Caution - 注意

<table width="100%">
<tr>
<td width="50%" valign=top>

<strong>From Version 0.12.0, The space character after the line number in pbList.css has been changed from `&nbsp;` to a single-byte space.</strong>

<strong>From Version 0.11.0, `pbskip` attribute is added to pbList.css. Changed the argument of [`PB100.prettify()`](#api) and added `PB100.fixLiga()`.</strong> `<pre class="pbList" pbskip="prettify fallback:img">` does not highlight code. does not highlight code.

<strong>From version 0.10.0, Hidden characters will be added to pbFont.css.</strong> Along with this, the character and homoglyph of <sub>E</sub>, <sub>E</sub><sup>-</sup> have been changed. For more details, please refer to [Ligatures and Hidden Charactors](#ligatures-and-hidden-charactors).

<strong>Since Version 0.9.19, The class name of pbLCD.css has been changed.</strong> Use `pbRng0-B` instead of `pbRng0B`. Browsers that support `[attr*=value]` have greatly reduced the CSS file size.

<strong>Since version 0.9.0, CSS tags have changed.</strong> Enclose `<style>` in `<noscript>` from version 0.9.0. See [HTML tags for import](#user-content-html-tags-for-import) for the full HTML tags.

<td width="50%" valign=top>

<strong>Version 0.12.0 から pbList.css の行番号の後の空白文字を `&nbsp;` から半角スペースに変更しました．</strong>

<strong>Version 0.11.0 から pbList.css に `pbskip` 属性が追加されました．[`PB100.prettify()`](#API) の引数を変更し、`PB100.fixLiga()` を追加しました．</strong>`<pre class="pbList" pbskip="prettify fallback:img">` と書くと、コードのハイライトと画像によるフォールバックを行いません．

<strong>Version 0.10.0 から pbFont.css に隠れキャラクタが追加されます．</strong>これに併せて <sub>E</sub>, <sub>E</sub><sup>-</sup> のキャラクタと homoglyph が変更されています．詳しくは [Ligatures and Hidden Charactors](#ligatures-and-hidden-charactors) を参照してください．

<strong>Version 0.9.19 から pbLCD.css のクラス名が変更されています．</strong>`pbRng0B` に替わって `pbRng0-B` を使います．`[attr*=value]` をサポートするブラウザで CSS のファイルサイズを大きく削減出来ました．

<strong>Version 0.9.0 から CSS のタグが変更されています．</strong>Version 0.9.0 からは `<noscript>` で `<style>` を囲みます．完全な HTML タグは [HTML tags for import](#user-content-html-tags-for-import) を参照してください.
</table>

## Overview - 概要

<table width="100%">
<tr>
<td width="50%" valign=top>

hamura.css provides a reliable way to share CASIO PB-100 programs in HTML.
Pass on the PB-100 game culture to the next generation with hamura.css.
<td width="50%" valign=top>

hamura.css は CASIO PB-100 用プログラムを HTML で共有する確かな方法を提供します．
hamura.css で PB-100 のゲーム文化を後世に伝えましょう．
</table>

## Demo and test pages - デモとテスト用のページ

 * [https version](https://pb-100.github.io/hamura.css/)

 * [http version](http://my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/), [http://bit.ly/3QlZ9IG](http://bit.ly/3QlZ9IG)

## Introductory article - 入門記事

[hamura.cssで始めるCASIO PB-100のためのHTML制作入門](//pbrocky.blogspot.com/2020/08/hamura.css.html)

## Library structure - ライブラリの構成

![pbList.css](https://3.bp.blogspot.com/-yqzH4PPbL8M/X0ZCcIQxbHI/AAAAAAAAAN4/TUsYiHt5xLw07_buBqH7qHmr09sxrIEuACLcBGAsYHQ/s160/pbList.css.png)
![pbFont.css](https://1.bp.blogspot.com/-M6Z32SpA_U8/X0ZCbivgO-I/AAAAAAAAANo/OCWRdwEcQHU6LJN-Z5fi-GXve0yRK9x3QCLcBGAsYHQ/s160/pbFont.css.png)
![pbLCD.css](https://2.bp.blogspot.com/-viSK8lFYTM8/X0ZCcIpL2gI/AAAAAAAAAN0/MxFJxkdpN0ALJ92ATxL5GCCrxXW4t3exgCLcBGAsYHQ/s160/pbLCD.css.png)
![pbChr.css](https://3.bp.blogspot.com/-uWQHJdHO2vo/X0ZCbnOJBDI/AAAAAAAAANw/3YDbUwkon6cruDiGaOiUAC-Y2ST6rxlrgCLcBGAsYHQ/s160/pbChar.css.png)
![pbKey.css](https://2.bp.blogspot.com/-TvC9KtOKm3M/X0ZCbqkKKsI/AAAAAAAAANs/HnObu2wL93EyX2e0nv6gUiNq9gZqVfDAQCLcBGAsYHQ/s160/pbKey.css.png)

<table width="100%">
<tr>
<td width="50%">
<p>The library is a collection of the following CSS.
<td width="50%">
<p>ライブラリは次の CSS を纏めたものです．
</table>

1. [pbList.css] PB-100 Web font + code beautifier
2. [pbFont.css] PB-100 Web font
3. [pbLCD.css] LCD image
4. [pbChr.css] LCD charactor image
5. [pbKey.css] PB-100 Key

## Ligatures and Hidden Charactors

<table width="100%">
<tr>
<td width="50%" valign=top>

Hidden characters can be entered on PB-100F, PB-110, PB-120 that support `MODE 18`. After saving the program rewritten on these models to a cassette tape, it is possible to print them on PB-100 by loading them on PB-100. However, a blank space is displayed on the screen.

Reference:[MODE 18, 19 (PEEK, POKE) 関連](https://littlelimit.net/mode18_19.htm), [umipi's tweet](https://twitter.com/umipi/status/1660630534069051393)

<td width="50%"  valign=top>

隠しキャラクタは、`MODE 18` をサポートする PB-100F, PB-110, PB-120 で入力が可能です．
これらの機種で書き換えたプログラムをカセットテープに保存してから、PB-100 に読み込むことで、PB-100 でも印刷することが可能です．しかし、ディスプレイには空白が表示されます．

参考:[MODE 18, 19 (PEEK, POKE) 関連](https://littlelimit.net/mode18_19.htm), [umipi さんのツイート](https://twitter.com/umipi/status/1660630534069051393)
</table>

| char code | char         | char or ligature | homoglyph(*1) |
|:----------|:-------------|:-----------------|:--------------|
| 1E        | <sub>E-<sub> | ᴇ⁻(ₑ₋, *2)       |Ē(ê, *2)       |
| 1F        | <sub>E<sub>  | ᴇ(ₑ, *2)         |               |
| 3A        | <sub>D<sub>  | ᴅ                |               |
| 3B        | <sub>ʟ<sub>  | ʟ                |               |
| 3C        | γ           | γ               |               |
| 3D        | ⇔           | ⇔               |               |
| 3E        | σ           | σ               |               |
| 3F        | <sub>-1<sub> | ₋₁               | ┨            |
| 5A        | “           | “               |               |
| 5B        | ”           | ”               |               |
| 7B        | ▓            | ▓                |               |
| 7C        | ╱            | ╱                |               |
| 7D        | <sup>b/<sup> | ᵇ/               | ы            |
| 7E        | <sub>/c<sub> | /ᴄ               | ć             |
| --(*3)    | <sup>-<sup>  | ⁻                |               |
| --(*3)    | <sub>-<sub>  | ₋                |               |
| --(*3)    | <sub>1<sub>  | ₁                |               |
| --(*3)    | <sup>b<sup>  | ᵇ                |               |
| --(*3)    | <sub>c<sub>  | ᴄ                |               |
|           | <sup>b/<sup>/<sub>c<sub>  | ᵇ/ᴄ |             |

<table width="100%">
<tr>
<td width="50%" valign=top>

1. Homoglyphs are used from JavaScript in browsers that do not support ligatures. It is not recommended to write homoglyphs directly in HTML.
2. This is set for compatibility with versions 0.9.x and earlier. It is deprecated in 0.10.0 and later, and may be removed in future versions.
3. This is set for graceful degradation in browsers where web fonts are enabled, ligatures are not supported, and JavaScript is disabled.

<td width="50%" valign=top>

1. ホモグリフは合字を非サポートのブラウザで JavaScript から使用します．HTML にホモグリフを直接書くことは非推奨です．
2. Version 0.9.x 以前との互換性の為に設定しています．0.10.0 以降では非推奨になり、将来のバージョンでは削除される可能性があります．
3. Web フォントが有効、リガチャを非サポート、JavaScript が無効のブラウザでのグレースフルデグラデーションの為に設定しています．
</table>

## API

### `PB100.prettify(htmlElement, opt_skipPrettify, opt_skipImageFallback, opt_onComplete(htmlElement))`

<table width="100%">
<tr>
<td width="50%" valign=top>

In Version 0.11.0, The option to not highlight was added and the argument was changed. If you only want to replace strings containing ligatures with homoglyphs, use `PB100.fixLiga()`. 

Code highlighting on dynamically added HTML elements after `onload`.

If `.pbList` and `.pbFont` are not present at the time of `onload`, `htmlElement` is highlighted after the Web font check has run.

<td width="50%" valign=top>

Version 0.11.0 でハイライトをしないオプションが追加されて、引数が変更されました．合字を含む文字列のホモグリフへの置換だけをしたい場合、`PB100.fixLiga()` を使用します．

`onload` 後に動的に追加された HTML 要素にコードハイライトを実施します．

`onload` 時点で `.pbList`, `.pbFont` が存在しない場合、Web フォントのチェックが走った後に `htmlElement` をハイライトをします．
</table>

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

### `PB100.fixLiga(htmlElement, opt_onComplete(htmlElement))`

<table width="100%">
<tr>
<td width="50%" valign=top>

Added in Version 0.11.0.
If the browser does not support ligatures, `.textContent` is replaced with a homoglyph.
<td width="50%" valign=top>

Version 0.11.0 で追加されました．
ブラウザが合字に非対応の場合、`.textContent` をホモグリフに置き換えます．
</table>

~~~js
var elm = document.createElement('code');
elm.className = 'pbFont';
elm.textContent = '1ᴇ⁻3';
document.body.appendChild(elm);
PB100.fixLiga(elm);
~~~

### `PB100.startBlinkingIfCursor(htmlElement)`

<table width="100%">
<tr>
<td width="50%">

If necessary, blink dynamically added cursor elements.

<td width="50%">

必要ならば、動的に追加したカーソル要素を点滅させます。
</table>

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

<table width="100%">
<tr>
<td width="50%" valign=top>

1. Set the appropriate style for IE8, IE9, Windows + Firefox ~88, Windows + Goanna that do not support `@media (forced-colors:active)` and `@media (-ms-high-contrast: active)` but do support high contrast mode.

<td width="50%" valign=top>

1. `@media (forced-colors:active)` と `@media (-ms-high-contrast:active)` をサポートしないがハイコントラストモードをサポートする IE8, IE9, Windows + Firefox ~88, Windows + Goanna に対して、適切なスタイルを設定します．
</table>

### pbLCD.css

<table width="100%">
<tr>
<td width="50%" valign=top>

1. Generate equivalent elements in web browsers that do not support CSS Generated Block
2. Blinks cursor in less than Opera 7.20, which does not support animated GIF in the `background-image` (pbChr.css too)
3. Blinks cursor in IE9 and high contrast mode

<td width="50%" valign=top>

1. CSS Generated Block をサポートしていない Web ブラウザは、同等の要素を生成します
2. `background-image` でのアニメーション GIF をサポートしない Opera 7.20 未満でカーソルを点滅させます(pbChr.css でも)
3. IE9 でハイコントラストモード時にカーソルを点滅させます
</table>

### pbList.css

<table width="100%">
<tr>
<td width="50%" valign=top>

1. Replace them with alternative character (Similarly for pbFont.css) in web browsers that do not support ligatures
2. If web font downloading is blocked, load CSS with embedded Data URI web fonts
3. Fallback with image replacement in web browsers that do not support web fonts

<td width="50%" valign=top>

1. 合字に対応していない Web ブラウザでは、代替文字に置き換えます (pbFont.css も同様)
2. Web フォントのダウンロードがブロックされている場合、Data URI 化した Web フォントが埋め込まれた CSS を読み込みます
3. Web フォントをサポートしていない Web ブラウザでは、画像置換でフォールバックします
</table>

## Helper Web Applications - 支援アプリ

![pbList Editor](https://4.bp.blogspot.com/-dL9CCgoBBy4/X0c44mZCxAI/AAAAAAAAAOk/6CcvviZvr609L9X7vg881cbEl7MpnzAEACLcBGAsYHQ/s160/pbListEditor.png)

<table width="100%">
<tr>
<td width="50%" valign=top>

The Helper Applications are under development.

1. [pbLCD Maker] Helper application to get HTML for pbLCD.css
2. [pbList Editor](https://pb-100.appspot.com/pbListEditor/) Helper application to get HTML for pbList.css

<td width="50%" valign=top>

支援アプリは開発中です．

1. [pbLCD メーカー] pbLCD.css 用の HTML を記述するための支援アプリです
2. [pbList エディタ](https://pb-100.appspot.com/pbListEditor/) pbList.css 用の HTML を記述するための支援アプリです
</table>

## How to import hamura.css from github.io to website - hamura.cssをgithub.ioからWebサイトにインポートする方法

### はじめに

<table width="100%">
<tr>
<td width="50%" valign=top>

Integrating a CSS library into a website without side effects is a difficult task for professionals.
If this explanation is difficult or if the following HTML cannot be added to the blog template due to the restrictions of the blog service, consider using the 4bit-city Blogger template (Release date undecided) that incorporates hamura.css.

<td width="50%" valign=top>

CSS ライブラリを副作用なく Web サイトに組み込むのはプロにとっても簡単ではない仕事です．
この説明が難しい場合や、ブログサービスの制限でブログテンプレートに次の HTML を追加できない場合は、hamura.css を組み込んだ Blogger 用テンプレート 4bit-city(リリース日未定) の利用を検討下さい．
</table>

### Notes - 注意事項

<table width="100%">
<tr>
<td width="50%" valign=top>

When importing hamura.css from github.io, there are the following issues. Therefore, it is recommended to place hamura.css on your own web server.

1. github.io will redirect to https: when accessed with http: and will fail to load on older browsers.
2. Both Javascript and CSS are not fully compressed and have appropriate line breaks. This is to make it easier to see the diffs at build time and is not optimal for use on websites.

hamura.css also describes the style for dark mode. If your website does not yet support dark mode, set up at least the following styles.

<td width="50%" valign=top>

hamura.css を github.io からインポートする場合、次の問題があります．この為、自前の Web サーバに hamura.css を配置することを推奨します．

1. github.io は http: でアクセスすると https: にリダイレクトされるため、古いブラウザで読み込みに失敗します．
2. Javascript, CSS ともに圧縮が不十分で適宜に改行を入れています．これはビルド時の Diff を確認しやすくする為であり Web サイトでの使用にとって最適ではありません．

また hamura.css にはダークモード用のスタイルが記述されています．ご利用の Web サイトでダークモードのサポートが未だの場合は、少なくとも次のスタイルを設定しておきます．

</table>

~~~css
@media only screen and (prefers-color-scheme: dark) {
    .pbList { background: hsl(0, 0%, 0%); color : hsl(0, 0%, 87%) } /* Use hsl not to apply in Opera ~9.27 */
}
~~~

### HTML tags for import

<table width="100%">
<tr>
<td width="50%">

Immediately after `</body>`, write the following tags.

`<noscript>` was added in Version 0.9.0.

<td width="50%">

`</body>` の直後に、次に示すタグを書きます．

Version 0.9.0 で `<noscript>` が追加されました．
</table>

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
/**/
</style></noscript>
<style>
@media only screen and (prefers-color-scheme:dark){
    .pbList{background:hsl(0,0%,0%);color:hsl(0,0%,87%)} /* Use hsl not to apply in Opera ~9.27 */
}
</style><!--<![endif]-->
<script src="//pb-100.github.io/hamura.css/hamura.js"></script>
</html>
~~~

## References - 参照プロジェクト

* [4bit city](https://github.com/pb-100/4bit-city) Blogger templete
* [Universe of CASIO Pocket Computer PB-100](https://pb-100.appspot.com/) pbrocky's homepage

## Old Version - 旧バージョン

 * [Old version of CSS library for CASIO PB-100](https://pbrocky.github.io/pb-100/)

## Installation

~~~bash
> git clone https://github.com/pb-100/hamura.css.git --recursive

> npm install
~~~

### Demo locally

Start a local web server. Then access [localhost:8022](http://localhost:8022/) in your browser.

~~~bash
> npm start
~~~

## How to build CSS - CSS のビルドの方法

<table width="100%">
<tr>
<td width="50%" valign=top>

1. CSS is written in SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) expanded comments
2. Generate the browser-specific .scss by gulp-iz-preprosessor
3. Compile the generated .scss
4. Finalize with `cssHack.preprocess()` and `cssHack.postprocess()`

<td width="50%" valign=top>

1. CSS は SCSS + [gulp-iz-preprosessor](https://github.com/itozyun/gulp-iz-preprocessor) 拡張コメントで書かれています
2. gulp-iz-preprosessor でブラウザ別の .scss を生成します
3. 出来た .scss をコンパイルします
4. `cssHack.preprocess()`, `cssHack.postprocess()` でファイナライズします
</table>

See [gulpfile.js](./gulpfile.js).

~~~bash
> gulp css
~~~

## How to build Javascript - Javascript のビルドの方法

See [gulpfile.js](./gulpfile.js).

~~~bash
> gulp js
~~~

## How to build JavaScript for testing - テスト用の Javascript のビルドの方法

~~~bash
> gulp test0
> gulp test1
> gulp test2

or

> gulp all
~~~

<table width="100%">
<tr>
<td width="50%" valign=top>

Build ./docs/hamura.js and the following test files.

<td width="50%" valign=top>

./docs/hamura.js と次のテスト用ファイルをビルドします．
</table>

1. ./docs/webfont-test.js | [test page](https://pb-100.github.io/hamura.css/webfont-test.html)
2. ./docs/webfont-blocked-test.js | [test page](https://pb-100.github.io/hamura.css/webfont-blocked-test.html)
3. ./docs/nowebfont-fallback-test.js | [test page](https://pb-100.github.io/hamura.css/nowebfont-fallback-test.html)

## How to create Web font files

[docs/icomoon.md](./docs/icomoon.md)

## For development

1. [hamura.cssのマルチブラウザ技術、pbLCD.cssとpbChr.css, pbList.cssのフォールバックの画像置換と強制カラーモード](https://pbrocky.blogspot.com/2022/04/multi-browser-techniques-of-hamuracss.html)
2. [マイコンプログラムをHTMLで表示するCSSのポイント、禁則処理、コピーペーストなど](https://pbrocky.blogspot.com/2020/08/CSS-for-MyCom.html) About pbList.css

## Licence - ライセンス

[New BSD License](http://opensource.org/licenses/BSD-3-Clause)

## Dependency Licenses


### web-doc-base

<table>
<tr>
<th>Author<td>itozyun
<tr>
<th>Website<td>https://github.com/itozyun/web-doc-base
<tr>
<th>License<td>

[MIT License](https://opensource.org/licenses/MIT)
</table>

### es2-to-es3

<table>
<tr>
<th>Author<td>itozyun
<tr>
<th>Website<td>https://github.com/ECMAScript2/es2-to-es3
<tr>
<th>License<td>

[MIT License](https://opensource.org/licenses/MIT)
</table>

## Rreferenced code

### hir90の日記 > [ネット]Javascript高速化・文字列の繰り返しを得る

<table>
<tr>
<th>Author<td>hir90
<tr>
<th>Website<td>

[https://web.archive.org/web/20111110062428/http://d.hatena.ne.jp/hir90/20080620/1213987444](https://web.archive.org/web/20111110062428/http://d.hatena.ne.jp/hir90/20080620/1213987444)
</table>

## Author - 作者

pbrocky : [Homepage](https://pb-100.appspot.com/), [X](https://x.com/pbrocky), [Blog](https://pbrocky.blogspot.com/), [Github](https://github.com/pbrocky)

