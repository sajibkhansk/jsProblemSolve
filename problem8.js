function findSecondSmallest(a) {
    if (a.length < 2) {
      return "Array must contain at least two numbers.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (const num of a) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return "There is no second smallest element.";
    }
  
    return secondSmallest;
  }
  console.log(findSecondSmallest([2, 5, 1, 8, 3]));  