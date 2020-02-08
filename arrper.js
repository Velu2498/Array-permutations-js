const array1 = ["xl", "xxl", "xxxl","sm","md"];
const array2 = ["cotton", "silk", "cs","sc"];
const array3 = ["red", "blue", "green"];
const array4=["india","us"]
const array5=["me"]

//with reduce function
/*
[head, ...[headTail, ...tailTail]] => array destructring
ex:[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
expected output: Array [30,40,50]
*/
const combine = ([head, ...[headTail, ...tailTail]]) => {
    // console.log(head)
    // console.log(headTail)
    // console.log(tailTail)
    // console.log([head, ...[headTail, ...tailTail]])
  if (!headTail) return head;

  const combined = headTail.reduce((acc, x) => {
    //   console.log(head.map(h => `${h}${x}`))
    return acc.concat(head.map(h => `${h}${x}`));
  }, []);
//   console.log(combined)
//   console.log(head)
  console.log(tailTail)

  return combine([combined, ...tailTail]);
};

// console.log("With two arrays only:", combine([array1, array2]));
// console.log("With N arrays:", combine([array1, array2, array3,array4]));
combine([array1, array2 ,array3,array4,array5])



// //with out reduce
// function combine (arrayOfArrays){

// let outputs = [];

// function permute(arrayOfArrays, whichArray=0, output=""){

//     arrayOfArrays[whichArray].forEach((array_element)=>{
//         if( whichArray == arrayOfArrays.length - 1 ){            
//             // Base case...
//             outputs.push( output + array_element );
//         }
//         else{
//             // Recursive case...
//             permute(arrayOfArrays, whichArray+1, output + array_element );
//         }
//     });
// }

// permute(arrayOfArrays);

// return outputs;

// }
// console.log(combine([array1,array2]))



// with negative test cases
/*
function combineArraysRecursively( array_of_arrays ){

    // First, handle some degenerate cases...

    if( ! array_of_arrays ){
        // Or maybe we should toss an exception...?
        return [];
    }

    if( ! Array.isArray( array_of_arrays ) ){
        // Or maybe we should toss an exception...?
        return [];
    }

    if( array_of_arrays.length == 0 ){
        return [];
    }
    for( let i = 0 ; i < array_of_arrays.length; i++ ){
        if( ! Array.isArray(array_of_arrays[i]) || array_of_arrays[i].length == 0 ){
            // If any of the arrays in array_of_arrays are not arrays or are zero-length array, return an empty array...
            return [];
        }
    }

    // Done with degenerate cases...
    let outputs = [];

    function permute(arrayOfArrays, whichArray=0, output=""){

        arrayOfArrays[whichArray].forEach((array_element)=>{
            if( whichArray == array_of_arrays.length - 1 ){            
                // Base case...
                outputs.push( output + array_element );
            }
            else{
                // Recursive case...
                permute(arrayOfArrays, whichArray+1, output + array_element );
            }
        });
    }

    permute(array_of_arrays);

    return outputs;
    

} 

console.log("combineArraysRecursively(array1, array2, array3) = ", combineArraysRecursively([array1, array2, array3]) );
*/