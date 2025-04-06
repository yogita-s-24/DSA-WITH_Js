import React from 'react'

const WhileLoop = () => {
    {
      let ans = prompt("Enter anything (exit foe close the page)");

      while(ans !== "exit"){
        console.log(ans);
        ans = prompt("Enter anything (exit foe close the page)");

      }
    }
  return (
    <div>
      <h1>Exit from the While Loop</h1>

    </div>
  )
}

export default WhileLoop
