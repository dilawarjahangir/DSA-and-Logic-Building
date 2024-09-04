

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) { 
        return i; 
      }
    }
    return -1; 
  }
  

  const array = [10, 20, 30, 40, 50];
  const target = 30;
  const result = linearSearch(array, target);
  
  if (result !== -1) {
    console.log(`Element found at index ${result}`);
  } else {
    console.log("Element not found in the array");
  }
  