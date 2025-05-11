import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number: "));

for(let i = 1; i<=n; i++){
    let ascii = 65;
    for(let j = 1; j<=i; j++){
       // eslint-disable-next-line no-undef
       process.stdout.write(String.fromCharCode(ascii)+ " ");
       ascii++
    }
    console.log();
    
}