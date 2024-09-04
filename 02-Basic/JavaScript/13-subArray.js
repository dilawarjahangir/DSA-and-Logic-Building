function subArray(array){
    for (let i = 0; i < array.length; i++) {
        let start=i
        for (let j = i; j < array.length; j++) {
            let end=j
            for (let k = start; k < end; k++) {
                
                process.stdout.write(`${array[k]} `)
        
            }
            console.log()
        }
        console.log()
        
    }
}

let arr = [2,4,6,8,10,12,14,16]

subArray(arr)