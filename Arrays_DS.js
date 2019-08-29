a = [1,4,3,2];

function reverseArray(a) {

//    let aSrted = a.reverse();
//    console.log(aSrted);
let output = [];
    for (i=a.length-1; i>=0; i--)
        {
            //console.log(a[i]);
            output.push(a[i]);
            
        }
    console.log(output.toString());
    return output;
    
}; //end reverseArray

reverseArray(a);


