def is_prime_number(number):
    if number <= 1:
        return False 

 
    for i in range(2, number- 1):
        if number % i == 0:
            return False 
    
    return True  

def print_primes_in_range(start, end):
    for number in range(start, end + 1):
        if is_prime_number(number):
            print(number)  
print_primes_in_range(10, 50)
