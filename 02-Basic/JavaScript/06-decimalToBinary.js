 function decimalToBinary(num){
     list=[]
        while(num>0){
            
            if(num%2===0){
                num=num/2
                list.push("0")

            }
            else if(num%2!==0){
                list.push("1")
                num=num-1
                num=num/2
            }
            
        }
        list.reverse()
        return list.join("")
}



binary= decimalToBinary(1505)
console.log(binary)