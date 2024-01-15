import functools
result = functools.reduce(lambda x, y: x + y, [47, 11, 42, 13])
print(result)
