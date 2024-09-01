def hollow_box():
    for i in range(5):
        for j in range(5):
            if i == 0 or i == 4 or j == 0 or j == 4:
                print("*", end="")
            else:
                print(" ", end="")
        print()


# hollow_box()


def cross():
    dif = 4
    for i in range(1, 6):
        for j in range(1, 6):
            if i == j or j - i == dif:
                print("*", end="")
            else:
                print(" ", end="")
        print()
        dif -= 2


# cross()


def inverted_and_rotated_pyramid():
    space = 4
    for i in range(5):
        for j in range(5):
            if j > space:
                print("*", end="")
            else:
                print(" ", end="")
        space -= 1
        print()


# inverted_and_rotated_pyramid()



def decreasing_number_count():
    rows = 5
    for i in range(rows, 0, -1):
        for j in range(1, i + 1):
            print(j, end=" ")
        print()


# decreasing_number_count()



def floyd_number():
    count = 1
    for i in range(5):
        for j in range(i + 1):
            print(count, end=" ")
            count += 1
        print()


# floyd_number()


def zero_one_triangle():
    for i in range(1, 6):
        for j in range(1, i + 1):
            if (i + j) % 2 == 0:
                print("1", end="")
            else:
                print("0", end="")
        print()


# zero_one_triangle()


def butterfly():
    row = 8
    col = 8
    half = row // 2
    right = 1
    left = col - 2

    for i in range(row):
        for j in range(col):
            if j < right or j > left:
                print("*", end="")
            else:
                print(" ", end="")
        print("")

        if i < half - 1:
            right += 1
            left -= 1
        elif i >= half:
            right -= 1
            left += 1


# butterfly()


def rhombus():
    size = 5
    print_count = 5
    for i in range(1, size + 1):
        for j in range(1, (size * 2)):
            if j >= print_count and j < print_count + 5:
                print("*", end="")
            else:
                print(" ", end="")
        print_count -= 1
        print()


# rhombus()

def hollow_rhombus():
    size = 5
    print_count = 5
    for i in range(1, size + 1):
        for j in range(1, (size * 2)):
            if j >= print_count and j < print_count + 5:
                if i == 1 or i == 5 or j == print_count or j == print_count + 4:
                    print("*", end="")
                else:
                    print(" ", end="")
            else:
                print(" ", end="")
        print_count -= 1
        print()


# hollow_rhombus()


def diamond():
    size = 8
    left = size // 2
    right = size // 2
    for i in range(1, size):
        for j in range(1, size):
            if j >= left and j <= right:
                print("*", end="")
            else:
                print(" ", end="")

        if i >= 4:
            left += 1
            right -= 1
        else:
            left -= 1
            right += 1

        print()


# diamond()

