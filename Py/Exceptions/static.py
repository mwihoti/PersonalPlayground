class sum:

    @staticmethod
    def getSum(*a):

        sum = 0

        for i in a:
            sum += i

        return sum
def main():
    print("Sum: ", sum.getSum(1,2,3,4,5))

main()