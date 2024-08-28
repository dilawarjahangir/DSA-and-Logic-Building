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


// 1
// 12
// 123
// 1234
const halfPyramid=()=>{
    for (let i = 1; i <5; i++) {
        for (let j = 1; j <=i; j++) {
            process.stdout.write(`${j}`)
        }
        console.log()
    }
}

// halfPyramid()


// A
// AB
// ABc
// ABCD
const characterHalfPyramid = () => {
    let rows = 4;
    let charCode = 'A'.charCodeAt(0); 
    
    for (let i = 0; i < rows; i++) {  
        for (let j = 0; j <= i; j++) { 
            process.stdout.write(String.fromCharCode(charCode + j)); 
        }
        console.log(); 
    }
}

// characterHalfPyramid();


// A
// BC
// DEF
// GHIJ

const increasingCharacterHalfPyramid = () => {
    let rows = 4;
    let charCode = 'A'.charCodeAt(0); 
    // console.log(charCode)
    for (let i = 0; i < rows; i++) {  
        for (let j = 0; j <= i; j++) { 
            process.stdout.write(String.fromCharCode(charCode));
            charCode+=1 
        }
        
        console.log(); 
    }
}

increasingCharacterHalfPyramid();