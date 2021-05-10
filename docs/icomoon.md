[github &gt; pb-100](//github.com/PB-100/) &gt; [hamura.css](../README.md)

# How to create PB-100 web fonts

1. [IcoMoon](https://icomoon.io/) で[設定ファイル](../icomoon/selection.json)等から Web フォントを作成する
2. ダウンロードした設定ファイルを整形する
3. ダウンロードした4つの Web フォントを .css に埋め込む

## 1. IcoMoon 用設定ファイル

[selection.json](../.icomoon/selection.json)

## 2. selection.json を整形する

IcoMoon からダウンロードした selection.json を整形する、例えば、[JSON beautifier](https://tools.m-bsys.com/development_tooles/json-beautifier.php) を利用する。

## 3. Web フォントを Data URI Scheme へ変換して .css に埋め込む

[PB-100.eot](./pbFont/PB-100.eot), [PB-100.svg](./pbFont/PB-100.svg), [PB-100.ttf](./pbFont/PB-100.ttf), [PB-100.woff](./pbFont/PB-100.woff) から [eot.css](./pbFont/eot.css), [svg.css](./pbFont/svg.css), [ttf.css](./pbFont/ttf.css), [woff.css](./pbFont/woff.css) をつくる。例えば、[data_uri_conv](https://hamayapp.appspot.com/static/data_uri_conv.html) を利用する。