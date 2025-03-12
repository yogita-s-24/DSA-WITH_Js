import React from 'react'

const index = () => {
    var n = Number(prompt("Kaha tak add karenge?"));

if (isNaN(n)) {
  console.log("Invalid input");
} else {
  if (n > 0) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
      sum = sum + i;
    }
    console.log(sum);
  } else {
    console.log("should be +ve and more than 0");
  }
}

  return (
    <div>
      for
    </div>
  )
}

export default index
