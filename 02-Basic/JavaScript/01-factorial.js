const findFactorial=(a)=>{
    let  factorial=1
    for (let i = 1; i <= a; i++) {
        factorial=factorial*i
        
    }
    return factorial
}


let factorial=findFactorial(5)
console.log(factorial)