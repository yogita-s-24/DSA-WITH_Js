/* eslint-disable no-undef */
import promptSync from "prompt-sync";

const prompt = promptSync();

let n = Number(prompt("Enter the number : "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("- ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }

  console.log();
}
