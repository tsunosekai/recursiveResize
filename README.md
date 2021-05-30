# recursiveResize
フォルダ内を再帰的にリサイズするスクリプト
デフォでは ./images フォルダ内を掘ります

# Getting started

node.js をインストール
https://nodejs.org/ja/

package.json のディレクトリで
```
npm install
```

app.js の中の以下変数をお好みで変更
```javascript
const folderName = './images';
const resizeRate = 0.75;
```

app.js のディレクトリで
```
node app
```
