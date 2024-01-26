from math import sin, cos, tan,pi

def map_func(x, functions):
    res = []
    for func in functions:
        res.append(func(x))
    return res
fam_functions = (sin, cos, tan)
print(map_func(pi, fam_functions))