 function findPairs (arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            console.log(`Pair : ${arr[i]}, ${arr[j]}`)
        }
    }
 }

 const number = [1,2,3,4,5,6,7,8,9]
 findPairs(number)