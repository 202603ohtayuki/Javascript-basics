const message = document.getElementById('message');
const changeBtn = document.getElementById('changeBtn');

/**getElementByIdはHTMLの特定の要素をJavaScriptで取得するときに使うコード
 * 今回は'メッセージ'という名前の商品を箱に入れ
 * 'チェンジボタン'というデータの中に待機させるイメージ */

changeBtn.addEventListener("click",
    function(){
    message.textContent = "こんばんは"
});

/* addEventListernerは動作のコード、
今回に至ってはクリックという動作になる　*/
