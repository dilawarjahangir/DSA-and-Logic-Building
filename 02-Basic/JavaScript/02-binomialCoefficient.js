const findFactorial=(a)=>{
    let  factorial=1
    for (let i = 1; i <= a; i++) {
        factorial=factorial*i
        
    }
    return factorial
}

function binomialCoefficient (n,r){
    if(n<=r){
        console.error("wrong values");
        
    }else{

        let fact_n= findFactorial(n)
        let fact_r= findFactorial(r)
        let factorialnMr=findFactorial(n-r)
        let biCoefficient= fact_n/fact_r*factorialnMr
        return biCoefficient
    }

}

let bi=binomialCoefficient(5,5)
console.log(bi)

