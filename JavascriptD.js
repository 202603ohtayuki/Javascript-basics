//★条件分岐

//条件を制御するためのパターン

/*
if(条件式)｛
ifがtrueになる場合実行する命令
｝else{
ifがtrue以外(false)になる場合実行する命令
}
*/


let age = 18;
const coupon = true;
const ticket = true;

if(age >= 18 && ticket && coupon){
    console.log("入場OK");
}else{
    console.log("入場NG");
}//false 入場NG



if(age >= 18 || ticket || coupon){
    console.log("入場OK");
}else{
    console.log("入場NG");
}//true 入場OK


//”問題”

let score = 90;
if(score >= 80){
    console.log('素晴らしいスコア')
}else if(score >= 60){
    console.log('合格最低限のラインです')
}else{
    console.log('不合格です。')
}
//１回目はifで、２回目もしくはもし、という以降はelse ifを使える





//★繰り返し処理　自転車が漕いでる間は走る・漕がないと止まるという感じ

//条件が当てはまる間にプログラムが動く

/*
        変数　        条件　   　インクリメント演算子（増分）
    for(let num = 1: num <= 5, num++){
    //繰り返す処理の内容
    }
*/

for(let a = 0; a <= 5; a++){
    console.log('こんにちは');
};//こんにちは×6になる（Javascriptは0スタート）

for(let i = 1; i <= 5; i++){
    console.log(i + '番目');
};//1番目～5番目が順番に付与される
