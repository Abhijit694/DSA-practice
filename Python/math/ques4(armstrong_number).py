def isArmstrong(num):
    digits = str(num)
    power = len(digits)
    finalResult = 0

    for digit in digits:
        finalResult += int(digit) ** power

    return finalResult == num


num = 155
print(isArmstrong(num))