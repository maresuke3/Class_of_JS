## JavaScrip

- このコンテンツでは JavaScript の基本公文について学びます

## JS の書き方

JavaScript には二つの書き方があります

1. **埋め込み方式**  
   これは HTML ファイル内に直接 JavaScript を書き込む方法です。具体的に以下のように記述します。

   ```hoge.html
   <script>

    // ここにJavaScriptのコードを記述して行きます

   </script>

   ```

   このように script タグで囲んだ部分に書き込んでいきます。この方法では多くの場合 html ファイルの head タグのなかにで行われることが多いです。

2. **ファイル方式**  
   これは JavaScript を別ファイルで記述し、HTML で先ほど使用した script タグを用いて別ファイルを呼び出す方法です。仮に別ファイルの名前を piyo.js とします。（.js は JavaScript ファイルの拡張子です。）この piyo.js を呼び出すときは以下のように行います。

   ```hoge.html

    <script src = " piyo.js "></script>

   ```

   上記のように記述することで外部の JavaScript ファイルを呼び出すことができます。
