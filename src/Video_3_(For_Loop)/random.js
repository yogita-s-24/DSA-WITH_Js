let random = Math.floor(Math.random() * 100 ) + 1

let guess = -1;

while(guess !== random){
    guess = Number( prompt("Guess the number"));
    if(isNaN(guess) || guess<1 || guess>100){
        console.log("Try again between 1 to 100");
        continue;
    }

    if(guess > random){
        console.log("Too high, Try again");
    }
    else if(guess < random){
        console.log("Too Low, Try again");
    }
    else{
        console.log("Congrats and number was ", guess);
        
    }
}