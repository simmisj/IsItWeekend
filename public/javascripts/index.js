$(document).ready(function () {
    var answer = document.getElementById("answer");
    answer.innerHTML = "haha2";
    var date = new Date;
    console.log(date+"");
    var element = document.getElementById("answer");
    if((date.getDay() == 5 && date.getHours() > 15) || date.getDay() == 6 || date.getDay() == 0){
        element.innerHTML = "yes";
    }else{
element.innerHTML = "no";
}
  
});
