// 変数の宣言(作成)
let str = "JavaScriptの勉強会を始めます"

// 文字列の長さを調べる
console.log(str.length);

// 日付を表示してみる
// 使用するのはDate型変数です！
let date = new Date();

// 表示する文字列のフォーマットの指定と表示
console.log(date.toLocaleString());


// では前節の復習は終えて実際に動かせるものを作ってみましょう！
// web上で何かを警告したり確認画面とか出てくる時によく使用されるalertを作ってみましょう

alert(str);


function answer() {
  let ans = "DOMでした！"
  window.alert(ans);
}

function answer02() {
  const ans = "Node(ノード)でした〜"
  window.alert(ans);
}

function mordal() {
  const test = "This is test message";
  window.alert(test);
}

  // var data = navigator.platform + "\n"
  // + navigator.userAgent + "\n";
  
window.addEventListener("DOMContentLoaded", function() {
  let areaSelect = document.getElementById("home");
  let prefSelect = document.getElementById("pref");
 
  // 
  let prefList = [
    ["北海道"],
    ["青森","岩手","宮城","秋田","山形","福島"],
    ["東京","茨城","栃木","群馬","埼玉","千葉","神奈川"],
    ["新潟","富山","石川","福井","山梨","長野","岐阜","静岡","愛知"],
    ["京都","大阪","三重","滋賀","兵庫","奈良","和歌山"],
    ["鳥取","島根","岡山","広島","山口"],
    ["徳島","香川","愛媛","高知"],
    ["福岡","佐賀","長野","大分","熊本","宮崎","鹿児島","沖縄"]
  ];

  areaSelect.addEventListener("change", function(event) {
    
    prefSelect.innerHTML = "";
    
    if (this.value == "") return;
  
    let list = prefList[this.value];
  
    for (let i = 0; i<list.length; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = list[i];
      prefSelect.appendChild(option);
    }
  });
})
