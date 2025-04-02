let pr = 34;

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
      let isPrime = true;

      for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        console.log(`${n} is a prime number`);
      } 
      else {
        console.log(`${n} is not a prime number`);
      }
    } 
    else {
      console.log("Number should be +ve and more than 0");
    }
  }
}
