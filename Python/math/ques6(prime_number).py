from math import sqrt
def isPrime(num):
    if num == 2: return True

    flag = 0
    for i in range(2,int(sqrt(num))+1):
        if num%i == 0:
            flag = 1
            break
    return False if flag == 1 else True


num = 14
print(isPrime(num))