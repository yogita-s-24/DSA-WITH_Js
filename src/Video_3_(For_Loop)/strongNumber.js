let n = 145;

if(n>0){
    var sum = 0;
    var copy = n;

    while(n > 0){
        var rem = n % 10;
        var fact = 1;

        for(let i =1; i <= rem; i++){
            fact = fact * i;

        }

        sum = sum + fact;
        n = Math.floor(n/10);
    }

    if(copy === sum){
        console.log("Strong");
    }
    else{
        console.log("Not Strong");
        
    }
}