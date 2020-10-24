# How to create PB-100 web fonts

1. icomoon で設定ファイル等から Web フォントを作成する
2. ダウンロードした設定ファイルを整形する
3. ダウンロードした4つの Web フォントを .css に埋め込む

## 1. icomoon 用設定ファイル

[./icomoon/selection.json](./icomoon/selection.json)

## 2. selection.json を整形する

icomoon からダウンロードした selection.json をフォーマットする、例えば、[JSON beautifier](https://tools.m-bsys.com/development_tooles/json-beautifier.php) を利用する。

## 3. Web フォントを Data URI Scheme 変換して .css に埋め込む

[PB-100.eot](./docs/pbFont/PB-100.eot), [PB-100.svg](./docs/pbFont/PB-100.svg), [PB-100.ttf](./docs/pbFont/PB-100.ttf), [PB-100.woff](./docs/pbFont/PB-100.woff) から [eot.css](./docs/pbFont/eot.css), [svg.css](./docs/pbFont/svg.css), [ttf.css](./docs/pbFont/ttf.css), [woff.css](./docs/pbFont/woff.css) をつくる。例えば、[data_uri_conv](https://hamayapp.appspot.com/static/data_uri_conv.html) を利用する。