var pr = prompt("Kaha tk add karwaoge??");

if (pr === null) {
  console.log("Cancelled");
} else {
  var n = Number(pr);

  if (isNaN(n)) {
    console.log("Invalid Input");
  } else {
    if (n > 0) {
      var sum = 0;
      for (var i = 0; i <= n; i++) {
        sum = sum + i;
      }
      console.log(sum);
    } else {
      console.log(`Should be +ve and more than 0`);
    }
  }
}
