
function deepClone(arr) {
    const newArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArray.push(deepClone(arr[i]));
      } else {
        newArray.push(arr[i]); 
      }
    }
    
    return newArray;
  }

  const array = [
    [
      ['some text', true, [1, 2, 3, 4, [10, 20]]],
    ],
    [
      [1, 2, 3, [100, 200]],
      ['name', 'age']
    ],
  ];
  
  const clonedArray = deepClone(array);
  console.log(clonedArray);