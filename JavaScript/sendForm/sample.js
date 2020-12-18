window.addEventListener("DOMContentLoaded", function() {
  let areaSelect = document.getElementById("home");
  let prefSelect = document.getElementById("pref");
 
  // 
  const prefList = [
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

// save data whitch is your personal data
function onSave(obj) {

  // reading element of form
  const name = document.getElementById('name').value;
  const password = document.getElementById('pas').value;
  const mail = document.getElementById('mail').value;
  const pas = document.getElementById('pas').value;
  const age = document.getElementById('year').value;
  const address1 = document.getElementById('home').value;
  const address2 = document.getElementById('pref').value;
  const address3 = document.getElementById('address').value;
  const address4 = document.getElementById('address2').value;

  // 
  let storage = localStorage;

  // save the element
  storage.hoge = name;
  console.log(storage.hoge);
  storage.hoge = password;
  console.log(storage.hoge);
  storage.hoge = mail;
  console.log(storage.hoge);
  storage.hoge = pas;
  console.log(storage.hoge);
  storage.hoge = age;
  console.log(storage.hoge);
  storage.hoge = address1;
  console.log(storage.hoge);
  storage.hoge = address2;
  console.log(storage.hoge);
  storage.hoge = address3;
  console.log(storage.hoge);
  storage.hoge = address4;
  console.log(storage.hoge);

  // 保存完了のアラート
  window.alert("登録しました")
  // リロード
  location.reload();
}

// check element
function checkAmount(obj) {
  let str = obj.value;
  if (str.length < 8) {
    window.alert("パスワードは８文字以上で作成してください。")
  }
}