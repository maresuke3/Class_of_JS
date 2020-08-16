window.addEventListener("DOMContentLoaded", function() {
  
  // HTMLのボタンタグを参照する
  let button = document.getElementById("button");
  // ボタンを押した後の挙動
  button.addEventListener("click", function() {
    // inputの記述内容を取得する
    let input = document.getElementById("keyword");
    let keyword = input.value
    
    // scriptタグの生成
    let script = document.createElement('script');
    // srcにFlickrのURLを指定
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + encodeURIComponent(keyword);
    // APIの呼び出し
    document.body.appendChild(script);
    // スクリプトタグの削除
    document.body.removeChild(script);
  });
});

function jsonFlickrFeed(data) {
  // HTMLの画像を表示するフィールドの指定。今回の指定フィールドはdivタグ
  let photo_list = document.getElementById("photo_list");
  // 表示フィールドの初期化(クリア)
  photo_list.innerHTML = "";

  // itemsキーで検索結果を取得保存
  for (let i = 0; i < data.items.length; i++) {
    // 検索結果の情報変数に格納
    let item = data.items[i];
    // ブラウザの表示フィールドに表示させるオブジェクトの作成　オブジェクト名はimg
    let img = document.createElement("img");
    // imgにURLを処理を指定し画像を検索結果を反映させる
    img.src = item.media.m;
    photo_list.appendChild(img);
  }
}