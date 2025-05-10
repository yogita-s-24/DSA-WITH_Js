import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number : "));

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        // eslint-disable-next-line no-undef
        process.stdout.write("* ")
    }
    console.log(" ");
    
}