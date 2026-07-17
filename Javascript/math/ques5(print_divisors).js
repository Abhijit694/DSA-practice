function printDivisors(num){
    for(let i=1; i * i <= num; i++){
        if(num % i === 0){
            console.log(i)
            if(i !== num/i){
                console.log(num / i)
            }
        }
    }
}

printDivisors(24)