//★データ型



//★プリミティブ型
//①ストリング型（文字列）
let string = "データ"
//②ナンバー型（番号）
let number = 123;
//③ブリアン型（真・偽）
let boolean = true;
let boolean2 = false;


//★参照型 データの塊　","は参照型にしか入力できない.['や”は入力するとエラーになる]

//①配列型　←四角かっこで記述　それぞれのデータに整理番号を付与するイメージ　０スタートになる
        // 0,1,2,3,4,5,6,7,8 ０スタートのため1つズレるイメージABCも一緒A→0　B→1　c→2
let arr = [1,2,3,4,5,6,7,8,9]

//②オブジェクト型 ←波かっこで記述　箱の集まり　順番にきれいに入っている　
let object = {
    firstName: "alessio",
    age:36
}
//firstName・age は キープロパティ　マトリョシカのようなもののイメージ　小さい箱ということ




//★演算子・・・データ型のための計算式

//①算術演算子 計算を行うための演算子

/*

[+]　足し算　a+b

[-]　引き算　a-b

[*]　掛け算　a*b

[/]　割り算　a/b

*/
let num = 2 * 3;
console.log(num)//6

let str = "higashi" + "osaka";
console.log(str)//higashiosaka

let data = "10" + "10";
console.log(data)//1010

//②比較演算子

/*

[===] 　a=b 完全に同じ
[a!==b] a≠b 完全に同じではない　
[<]     a<b AがBより小さい 
[>]     a>b AがBより大きい
[<=]   a<=b Aを含めてB以下
[>=]   a>=b Aを含めてB以上

*/

let age = 19;
console.log(age >= 18); //true 本当

let numbr = 21;
console.log(numbr <= 20); //false　偽り


//③論理演算子

/*
◎[&&] and そして a&&b
▽[||] or もしくは a||b
◇[!] not 否定演算子 !a
*/

// ◎ a&&b 両方で本当になる
let ages = 21;
const money = true;

console.log(ages >= 20 && money) //true 本当 片方のみがOKでももう片方が条件を満たしてなければ結果はfalse偽りとなる

//▽　a||b　片方で本当になる
let ages2 = 18;
const money2 = false;

console.log(ages2 >= 18 || money2)//true 本当　片方のみでもOKならtrueになる

//◇　！not 否定演算子 （条件定義によく使われる年齢制限やPWなど）

console.log(!money3);

let a = 17;
const b = true;

console.log(a <= 10 && !b)//false

