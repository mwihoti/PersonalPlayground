p = [(x,y) for x in [1, 3, 2] for y in [3, 1, 4] if x != y]
print(p)

#complex expression
vec = [-4, -2, 0, 4, 6]
r = [x**2 for x in vec]
print(r)
s = [c for c in vec if c >= 1]
print(s)

#more example
fresh = ['beans', 'loganbery', 'passionFruit']
fr = [m.strip() for m in fresh]
print(len(fresh))
print(fr)