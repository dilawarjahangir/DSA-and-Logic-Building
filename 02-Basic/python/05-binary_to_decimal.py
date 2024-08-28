string= "1001100"

def binary_to_decimal(str):
    decimal=0
    power=0
    for i in range(len(str) - 1, -1, -1):
        print(f"Index: {i}, Power: {power}, Digit: {str[i]}")
        decimal += int(str[i]) * (2 ** power)
        power += 1
    return decimal
print(binary_to_decimal(string))