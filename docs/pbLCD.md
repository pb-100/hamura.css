# pbLCD と pbChr

PB-100 のディスプレイを模した画像状のコンテンツ(pbLCD.css)と LCD セグメントを模した画像状のコンテンツ(pbChr.css)を HTML で提供できる。ブラウザが画像と CSS に非対応の場合、テキストでコンテンツが提供される。

画像置換には `content:url` か `background-image` を使う。`content:url` は、印刷時に「背景画像を印刷しない」設定でもコンテンツが欠落しない利点がある。Opera 9.5, Gecko 1.9.1 未満の制限については [【画像スプライト編】Web文書のグレースフルデグラデーションをムキになってやってみる](https://outcloud.blogspot.com/2020/12/graceful-image-sprite.html) を参照のこと。

## 使用技術

| broser       | pbChr           | pbChr blinking | pbLCD`<b>`     | alpha        | pbLCD ghost     | alpha        | 置換画像 |
|:-------------|:----------------|:---------------|:---------------|:-------------|:----------------|:-------------|:--------|
| modern       | :after content  | motion gif     | :after content | opacity      | :before content | opacity      | x3.gif, x3.anime.svg |
| IE 9         | :after content  | motion gif     | :after content | opacity      | :before content | opacity      | x3.gif, x3.svg |
| IE 8         | :after content  | motion gif     | :after content | alpha.png    | :before content | alpha.png    | x3_x10.png, x3_csr.gif |
| Opera 9~9.2x | bg-img          | motion gif     | :after content | opacity      | :before content | opacity      | x3.gif |
| Opera 7.2~8  | bg-img          | motion gif     | :after content | alpha.png    | :before content | alpha.png    | x3_x10.png, x3_csr.gif |
| Opera 7~7.1  | bg-img          | js             | bg-img         | alpha.png    | js              | alpha.png    | x3_x10.png |
| Gecko ~1.9.0 | bg-img          | motion gif     | bg-img         | -moz-opacity | js              | -moz-opacity | x3.gif |
| IE 7         | bg-img          | motion gif     | bg-img         | alpha.png    | js              | alpha.png    | x3_x10.png, x3_csr.gif |
| IE 5~6       | bg-img          | motion gif     | bg-img         | etc          | js              | etc          | x3_x10_8.png, x3_csr.gif |
| macIE 5      | bg-img          | motion gif     | bg-img         | alpha.png    | js              | alpha.png    | x3_x10.png, x3_csr.gif |

各ブラウザ用に異なる CSS プロパティを使って表示している。

## モダンブラウザと IE9

CSS-P に対応する CSS Generated Content と opacity で最も短く記述出来る。実行時にロードする画像も最小サイズになる。

### EdgeHTML

高圧縮されたアニメーション GIF でリピートしない為、カーソルの点滅に CSS アニメーションを使う。

### 強制カラーモード

テキストカラーを反映させるために pbChr では x3.animate.svg でキャラクタを表示する。カーソルの点滅は CSS で行う。CSS アニメーションに対応しない IE9 は x3.svg を使い、Javascript でカーソルを点滅させる。

## IE8

CSS-P に対応する CSS Generated Content を備えるが opacity に対応しない為、複数の透過画像を並べた png をロードする。透過度の変化の為に top を変化させる。

### 強制カラーモード

light-on-dark, dark-on-light を Javascript で検出し、light-on-dark の場合は outline を使って色を反転させてカラーモードに馴染ませる。

## Opera 9~9.2x

CSS Generated Content の CSS-P にはブロック要素という制限がある。この為に pbChr では background-image で表示する。
このバージョンから Opera は opacity をサポートした。

## Opera 7.2~8.x

opacity に対応しない為、複数の透過画像を並べた png をロードする。透過度の変化の為に top を変化させる。

## Opera 7.0~7.1

CSS Generated Content が CSS-P に非対応の為、ゴーストの代替要素を javascript で書きだす。

## Gecko ~1.9.0

1.9.0 は Firefox 3 にあたる。CSS Generated Content が CSS-P に非対応の為、ゴーストの代替要素を javascript で書きだす。

かなり初期から -moz-opacity が使える。

## IE7

CSS Generated Content に非対応の為、ゴーストの代替要素を javascript で書きだす。
background-position-x, background-position-y が使える為、CSS を短く記述できる。
background-image で表示する為、背景画像を印字しない設定でコンテンツが欠落する。

# IE 5, 5.5, 6

IE7 の制限に加えて、透過 png に非対応の為、代替画像を使用する。-ms-filter の可否を判定して、完全な透過表示を行う。

# Mac IE 5

> 続けて記述された複数のクラスセレクタ（E.class1.class2）

に非対応!9個の png によるフォールバックの復活 [付録：CSS対応状況表 セレクタ](http://hp.vector.co.jp/authors/VA022006/css/corrbrwser/selector.html)

## カーソルの点滅

Opera 7.20 未満で背景画像のモーション gif に非対応の為、js で点滅させる。