def decimal_to_binary(num):
    binary_list = []
    
    while num > 0:
        if num % 2 == 0:
            binary_list.append('0')
            num = num // 2
        else:
            binary_list.append('1')
            num = (num - 1) // 2
    
    binary_list.reverse()
    return ''.join(binary_list)

binary = decimal_to_binary(1505)
print(binary)
