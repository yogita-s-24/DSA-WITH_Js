  import promptSync from "prompt-sync";
  const prompt = promptSync();

//   let n = Number(prompt("Enter the number :"));
//   for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
//   }


//OR


let n = Number(prompt("Enter the Number: "));

for(let i=1; i<=n; i++){
    for(let j=n; j>=i; j--){
        // eslint-disable-next-line no-undef
        process.stdout.write("* ");
    }
    console.log();
    
}

