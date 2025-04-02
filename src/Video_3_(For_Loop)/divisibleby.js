let pr = 36;

if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid input");
  } else {
    if (n > 0) {
      for (let i = 0; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          console.log(i);
        }
      }
      console.log(n);
    } else {
      console.log("Number should be +ve and more than 0");
    }
  }
}
