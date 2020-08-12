// 変数   (var)
var m = "Good morning!";
let a = ["Good afternoon!", "Good evening!"];　// 変数の中に配列を入れることも可能です。
let r = "Hello";
var e = {institute: "金沢工業大学", major: "情報フロンティア学部", department: "メディア情報学科", class: 2};

// 定数 (const or let)
const myname = "mare";

// 値を取り出す
console.log(m);
console.log(a[1]);
console.log(e.institute);
console.log(myname);


// 分岐 (if文)
var numA = 1;
if (numA == 1) {
  console.log("変数numAの値は1です")
}else if (numA == 2) {
  console.log("変数numAの値は2です")
} else {
  console.log("変数numAの値は1または2ではありません")
}

// ちょっと応用(分岐に四則演算をいろいろ使って奇数偶数かを判断する)
if (numA%2 == 0) {
  console.log("numAは偶数です")
} else {
  console.log("numAは奇数です")
}


// 繰り返し (for文、while文、do-while文)
for (var numB = 0; numB<10; numB++) {
  console.log(numB)
}

var numC = 0;
while (numC < 10) {
  
}