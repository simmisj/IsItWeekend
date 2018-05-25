$(document).ready(function () {
    var answer = document.getElementById("answer");
    answer.innerHTML = "haha2";
    var date = new Date;
    console.log(date+"");
    var element = document.getElementById("answer");
    if((date.getDay() == 5 && date.getHours() >= 15) || date.getDay() == 6 || date.getDay() == 0){
        element.innerHTML = "yes";
        element.style.color = "green";
    }else{
        element.innerHTML = "no";
        element.style.color = "red";
    }
    /*
    var timeData = [],
    previousWeekendsChartData = [];
    
    var data = {
    labels: timeData,
    datasets: [
        {
            fill: false,
            label: 'Weekend',
            yAxisID: 'Weekend',
            borderColor: "rgba(255, 204, 0, 1)",
            pointBoarderColor: "rgba(255, 204, 0, 1)",
            backgroundColor: "rgba(255, 204, 0, 0.4)",
            pointHoverBackgroundColor: "rgba(255, 204, 0, 1)",
            pointHoverBorderColor: "rgba(255, 204, 0, 1)",
            data: previousWeekendsChartData
        }
        ]
    }
    
    var basicOption = {
    title: {
      display: true,
      text: 'Weekends',
      fontSize: 36
    },
    scales: {
      yAxes: [{
        id: 'Weekend',
        type: 'linear',
        scaleLabel: {
          labelString: 'Weekend(C)',
          display: true
        },
        position: 'left',
      }]
    }
  }

  //Get the context of the canvas element we want to select
  var chartElement = document.getElementById("previousWeekendsChart").getContext("2d");
  var optionsNoAnimation = { animation: false }
  var myLineChart = new Chart(chartElement, {
    type: 'line',
    data: data,
    options: basicOption
  });
    var dayNumber = date.getDay();
    var hourNumber = date.getHours();
    for(i = dayNumber; i < 14+dayNumber; i++){
        var modDay = i % 7;
        if(modDay == 6 || modDay == 5  || modDay == 0){
            previousWeekendsChartData.push(1);
        }else{
            previousWeekendsChartData.push(0);
        }
        //timeData.push();
    }
    myLineChart.update();
*/
});
