
# ****
# ****
# ****
# ****
def basic():
    columns = 4
    rows = 4
    for i in range(rows):
        for j in range(columns):
            print("*", end="")  
        print()  

# basic()


# *
# **
# ***
# ****

def increasing_pattern():
    rows=4
    for i in range(rows):
        for j in range(i):
            print("*",end="")
        print()

# increasing_pattern()


# ****
# ***
# **
# *
def decreasing_pattern():
    rows=4
    column=4
    for i in range(rows):
        for j in range(column):
            print("*",end="")
        print()
        column-=1

# decreasing_pattern()

# 1
# 12
# 123
# 1234
def half_pyramid():
    row=4
    for i in range(row):
        for j  in range(i+1):
            print(f"{j+1}",end="")
        print()
    
half_pyramid()