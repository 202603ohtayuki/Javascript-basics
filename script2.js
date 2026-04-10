const result = document.getElementById("result");
const run = document.getElementById("run")

run.addEventListener("click",
    function (){
        let name =document.getElementById("name").value;
        let age =document.getElementById("age").value;
        let food =document.getElementById("foods").value;
        let program =document.getElementById("program").checked;

        result.textContent =
        "名前:"+ name + "\n"+
        "年齢:"+ age + "\n"+
        "好きな食べもの:"+ food + "\n"+
        "プログラミング好き:"+ program ;
    }
)
