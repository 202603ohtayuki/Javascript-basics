//DOM

//Document Object Manipulation
//→JavascriptからHTMLを操作する仕組みのこと

//iDを読み込む（操作する）メソッド

function changeTxt(){
document.getElementById("title").textContent = "Typescript"
}

//イベント

/*
Javascriptはイベントをきっかけに動く言語です。
イベントとはユーザーの操作です。

例：クリック・入力・マウスの動き・スクロールなど

*/


//addEventListener
document.getElementById("button").addEventListener("click",function(){
    alert('クリックされました')
})