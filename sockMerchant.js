let n = 8;
let ar = [1, 1, 2, 2, 3, 3, 1, 2, 3];
//[ 1, 1, 1, 2, 2, 2, 3, 3, 3 ]
function sockMerchant(n, ar) {
  
  ar.sort(function(a, b) {
    return a - b;
  });

  let matchCount = 0;
  for (let i = 0; i < 7; i++) {
 
    if (i < n) {
      if (ar[i] === ar[i+1]) {
        matchCount ++;
        i++
    }
  }
  } //end for loop
  
  console.log(matchCount);
  return matchCount;
} //end function

sockMerchant(n, ar);
