
// this function is to process the simple interest
function processSimpleInterest() {
    
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var time = document.getElementById('time').value;

    var result =calculatorSI(principal, rate, time);


    document.getElementById('answer').innerHTML = 'Total: ' + result;

}


// this function calculates simple interest I = PRT/100
function calculatorSI(p, r, t) {

    var total = 0;

    total = (p * r * t) / 100;
    
    return total;
}