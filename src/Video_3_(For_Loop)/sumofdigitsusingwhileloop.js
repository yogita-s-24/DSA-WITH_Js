let num = 1234321;

if (num === null) {
  console.log("Cancelled");
} else {
  let n = Number(num);
  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if(n>0){
        let sum = 0;
        while(n>0){
            let rem = n % 10;

            sum = sum + rem;

            n = Math.floor(n/10)
        }
        console.log(`Sum of the number is ${sum}`);
        
    }
  }
}
