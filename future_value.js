var $ = function (id) {
    return document.getElementById(id);
};

var calculateClick = function() {
    var investmentAmount =  parseFloat($('investment').value);
    var taxRate = parseFloat($('rate').value);
    var numOfYears = parseInt($('years').value);
    var futureValue = investmentAmount;


    for(i = 1; i <= numOfYears; i++){

        futureValue += futureValue * taxRate /100;

    }

    $('future_value').value = futureValue.toFixed(0);

};


window.onload = function() {
  $('calculate').onclick = calculateClick;
};

