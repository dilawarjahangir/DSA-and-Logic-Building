function allPossiblePair(arr){
    let pairs=[]
    for (let i= 0; i< arr.length; i++) {
        
        for (let j= i+1; j< arr.length; j++) {
                let pair=[arr[i],arr[j]]
                pairs.push(pair)
        
        }   
    }
    return pairs
}


let arr= [2,4,6,8,10]

console.log(allPossiblePair(arr))