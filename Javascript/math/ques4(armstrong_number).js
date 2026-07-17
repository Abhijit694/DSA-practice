function checkArmstrong(num){
    let copyNum = num
    let result = 0
    let count = 0
    while(copyNum>0){
        count += 1
        copyNum = Math.floor(copyNum/10)
    }
    copyNum = num
    while(copyNum>0){
        let lastDigit = copyNum % 10
        result += lastDigit ** count
        copyNum = Math.floor(copyNum/10)
    }
    return (result === num)   
}

function isArmstrong(num){
    let str = num.toString()
    let power = str.length
    let sum = 0
    for(let digit of str){
        sum += Math.pow(Number(digit),power)
    }

    return sum === num
}


let num = 154
console.log(isArmstrong(num))