def is_prime_number(number):
    if number <= 1:
        return False 
    
    for i in range(2, number - 1):
        if number % i == 0:
            return False  
    
    return True  


print(is_prime_number(5)) 
print(is_prime_number(79)) 
