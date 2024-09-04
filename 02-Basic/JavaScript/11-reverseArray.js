function reverseArray(Arr){
    let start =0;
    let end= Arr.length-1;
    while(start<end){
        let temp =Arr[end]
        Arr[end] = Arr[start];
        Arr[start]=temp
        
        start++
        end--
    }
    return Arr
}


arr=[10,20,30,40,50,60,70]
let  reversedArr = reverseArray(arr)
console.log(reversedArr)