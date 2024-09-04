function findLargest(array) {
    let val=array[0]
    for (let i = 0; i < array.length; i++) {
      if (val<array[i]) { 
        val = array[i] 
      }
    }
    return val; 
  }
  

  arr = [10,20,50,785,54,65,5484,4545]

  largest = findLargest(arr)

  console.log("largest value in array:",largest)