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


    if(investmentAmount <= 0){
        alert("You're investment amount has to be more than 0");
    } else if(taxRate <= 0){
        alert("You're Interest Rate has to be more than 0")
    } else if(numOfYears <= 0){
        alert("The Years have to be more than 0");
    } else {
        $('future_value').value = futureValue.toFixed(0);
    };

};


window.onload = function() {
  $('calculate').onclick = calculateClick;
};

