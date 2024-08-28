let string= "1010101100011"

function binaryToDecimal(str){
    let decimal=0
    let power=0
    for (let i = str.length-1; i >=0; i--) {
        console.log(power)
      
        decimal += parseInt(str[i]) * (2 ** power);
        power++;
    }
    return decimal
// 
}

console.log(binaryToDecimal(string))
