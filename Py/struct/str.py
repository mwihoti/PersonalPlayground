basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)
m = 'orange' in basket
print(m)

"""set funtion"""
a = set('abracadabra')
b = set('alarmcs')
print(a)
print(b)
print(a | b)

a = {x for x in 'abracadabra' if x not in 'abc' }
print(a)