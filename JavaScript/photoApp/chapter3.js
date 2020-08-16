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
  let photo_list = document.getElementById("photo_list");
  photo_list.innerHTML = "";

  for (let i = 0; i < data.items.length; i++) {
    let item = data.items[i];
    let img = document.createElement("img");
    img.src = item.media.m;
    photo_list.appendChild(img);
  }
}