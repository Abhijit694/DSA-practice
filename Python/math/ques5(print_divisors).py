from math import sqrt

def printDivisors(num):
    for i in range(1,int(sqrt(num))+1):
        if num % i == 0:
            print(i)
            if i != num//i :
                print(num // i)

printDivisors(24)