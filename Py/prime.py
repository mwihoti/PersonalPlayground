def isprime(num):
    for i in range(2, num):
        if (num % i) == 0:
            return False
    return True
def getprime(max_number):
    list_prime = []

    for num1 in range(2, max_number):
        if isprime(num1):
            list_prime.append(num1)
    return list_prime
    
maximum_check = int(input("Search for prime numbers upto: "))
list_prime = getprime(maximum_check)

for prime in list_prime:
    print(prime)
