function findSmallest(array) {
    let val=array[0]
    for (let i = 0; i < array.length; i++) {
      if (val>array[i]) { 
        val = array[i] 
      }
    }
    return val; 
  }
  

  arr = [10,20,50,785,54,65,5484,4545]

  Smallest = findSmallest(arr)

  console.log("Smallest value in array:",Smallest)