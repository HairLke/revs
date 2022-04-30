const matrix = [
    [0, 1],
    [2, 3],
    [4, 5],
    [8,2]
  ];
  // impl
  const myReduce = (arr, callback, startValue) => {
    let result = startValue || arr[0];
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr );   
    }
    return result;
    
  }
  console.log(myReduce(matrix, (acum, curr) => acum.concat(curr).reverse(), []),);