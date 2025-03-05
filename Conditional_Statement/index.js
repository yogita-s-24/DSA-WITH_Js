let age = prompt("Enter your number");

if(isNaN (age)){
    console.log("Input is Invalid.")
}
else if( age >=18){
    console.log("You are eligible for the voting")
}
else{
    console.log("You are not eligible for the voting")
}
