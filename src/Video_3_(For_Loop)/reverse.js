let n = 1234;

if(n > 0){
    let rev = 0;
    while(n > 0){
        let rem = n % 10;
        rev = rev * 10 + rem;
        n= Math.floor(n/10);
    }
    console.log(`Reverse of ${n} is ${rev}`);   
    }