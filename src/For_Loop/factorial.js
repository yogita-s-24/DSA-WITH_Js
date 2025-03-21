var pr = 5;

if (pr === null) {
  console.log("Cancelled");
} 
else {
  let n = Number(pr);

    if (isNaN(n)) {
    console.log("Invalid Input");
  } 
    else {

    if (n > 0) {
      let fact = 1;

      for (let i = 1; i <= n; i++) {
        fact = fact * i;
      }
      console.log(`Factorial of ${pr} is ${fact}`);
    }
    else{
        console.log("Should be number is +ve or more than 0");
        
    }
  }
}
