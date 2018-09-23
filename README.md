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

[demo.html](https://pb-100.github.io/hamura.css/demo.html)
[http: demo.html](http://my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/demo.html) http://t.co/Q0zQRb3xzk

## References - 参照プロジェクト

* [4bit city](https://github.com/pb-100/4bit-city) Blogger templete
* [Universe of CASIO Pocket Computer PB-100](http://www.geocities.jp/pbrocky544/) pbrocky's homepage

## Old Version

[Old version of CSS library for CASIO PB-100](https://pbrocky.github.io/pb-100/)

## Licence

[New BSD License](http://opensource.org/licenses/BSD-3-Clause)

## Author

[pbrocky](https://github.com/pbrocky)

