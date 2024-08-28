def find_factorial(a):
    factorial = 1
    for i in range(1, a + 1): 
        factorial *= i  
    return factorial


def binomial_coefficient(n,r):
    if n<=r:
        print("wrong valuues")
    else:
        n_fact=find_factorial(n)
        r_fact=find_factorial(r)
        fact_nMr=find_factorial(n-r)
        bi_coefficient= n_fact/r_fact*fact_nMr
        return bi_coefficient
    
print(binomial_coefficient(6,4))

    