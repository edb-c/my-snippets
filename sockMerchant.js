let n = 8;
let ar = [1, 1, 2, 2, 3, 3, 1, 2, 3];
//[ 1, 1, 1, 2, 2, 2, 3, 3, 3 ]
function sockMerchant(n, ar) {
  let arSrted = ar.sort(function(a, b) {
    return a - b;
  });
  //  console.log(arSrted);
  let matchCount = 0;
  var numHold = 0;
  for (let i = 0; i <= arSrted.length; i++) {
    //console.log(i + ' ' + numHold + ' ' + arSrted[i]);
    if (numHold == 0) {
      numHold = arSrted[i];
    //  console.log('NumHold is changed ' + numHold);
      // console.log(i + " " + numHold + " " + arSrted[i])
    } else if (numHold == arSrted[i]) {
      //     console.log(i + " " + numHold + " " + arSrted[i])
      //console.log('Numhold = arSrted');
      matchCount++;
      numHold = 0;
    } else {
      numHold = arSrted[i];
    } //end if
  } //end for loop

  //console.log(matchCount);
  return matchCount;
} //end function

sockMerchant(n, ar);
