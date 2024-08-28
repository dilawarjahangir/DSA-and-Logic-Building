def find_factorial(a):
    factorial = 1
    for i in range(1, a + 1): 
        factorial *= i  
    return factorial

factorial = find_factorial(5)
print(factorial)