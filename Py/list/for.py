for num in range(28):
    if num % 2 == 0:
        print(num)

nums = [1, 2, 3, 4, 5]

for index in range(len(nums)):
    nums[index] = nums[index]**2
    print(nums[index])

for index, value in enumerate(nums):
    numt = value**2
    print(numt)