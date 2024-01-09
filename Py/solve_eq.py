def solve_eq(equatition):
    x, add, num1, equal, num2 = equatition.split()

    num1, num2 = int(num1), int(num2)

    return "x = " + str(num2 - num1)

print(solve_eq("x + 4 = 9"))