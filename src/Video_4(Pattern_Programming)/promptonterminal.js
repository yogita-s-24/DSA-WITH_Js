import promptSync from 'prompt-sync';
const prompt = promptSync();

let a = prompt("Enter the number: ");
// eslint-disable-next-line no-undef
process.stdout.write(a);
