//関数

//宣言式関数
function Name(引数){
    console.log("アレッシオ"); //実行したい命令を入力
}

Name(引数);//宣言関数　引数は関数のデータの箱の内容を引っ張って引き渡すためにある


//変数 閉じていない箱　内容変更可能　変更する可能性が高いもののデータ

let gotokikaku1 = "Javascript";
console.log("gotokikaku1")

//定数　閉じている箱　固定したいもの消費税など　変化しないデータ

const gotokikaku2 = "Javascript2";
console.log(gotokikaku2)

let price = 1000;
const tax =1.1;
console.log(price * tax);

