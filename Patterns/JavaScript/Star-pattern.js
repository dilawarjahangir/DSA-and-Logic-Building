// ****
// ****
// ****
// ****
const basic = () => {
    let column = 4;
    let rows = 4;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < column; j++) {
            process.stdout.write("*");
        }
        console.log(); 
    }
}

// basic();


// ****
// ***
// **
// *
const decreasingPattern=()=>{
    let rows=4
    for(i=rows;i>0;i--){
        for(j=0;j<i;j++){
            process.stdout.write("*")
        }
        console.log();
    }
}

// decreasingPattern()


const increasingPattern=()=>{
    let rows=4
    for(i=0;i<=rows;i++){
        for(j=0;j<i;j++){
            process.stdout.write("*")
        }
        console.log();
    }
}

// increasingPattern()


const halfPyramid=()=>{
    for (let i = 1; i <5; i++) {
        for (let j = 1; j <=i; j++) {
            process.stdout.write(`${j}`)
        }
        console.log()
    }
}

halfPyramid()