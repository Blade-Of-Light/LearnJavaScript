
//input an array
function tipAmmount (arr){
    var arr = arr;
    var tip = [];
    var tipTotal = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 50){
            tipTotal[i] = arr[i] * 0.2 + arr[i];
            tip[i] = arr[i] * 0.2;
            continue
        } else if (arr[i] < 200) {
            tipTotal[i] = arr[i] * 0.15 + arr[i];
            tip[i] = arr[i] * 0.15;
            continue
        }
        tipTotal[i] = arr[i] * 0.1 + arr[i];
        tip[i] = arr[i] * 0.1;
    }
    var tipAVG = 0;
    for (var i = 0; i < tipTotal.length; i++){
        tipAVG =+ tipTotal[i];
    }
    tipAVG = tipAVG / tipTotal.length;
    return tipTotal + ' indevidual tips are: ' + tip + ' the average is: ' + tipAVG ;
}

console.log('printing out tip ammounts')
console.log (tipAmmount ([124, 48, 268]));