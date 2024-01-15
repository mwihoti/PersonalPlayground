def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:

        result = fib(n-1) + fib(n-2)
        return result
    
print(fib(4))