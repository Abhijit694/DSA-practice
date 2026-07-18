function isPrime(num){
    if(num === 2) return true

    let flag = 0
    for(let i=2;i*i<=num;i++){
        if(num%i === 0) {
            flag = 1
            break
        }
    }
    return flag === 1 ? false : true
}

let num = 18
console.log(isPrime(num));