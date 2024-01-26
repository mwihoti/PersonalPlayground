tel = {'jack': 4098, 'sape': 4099}
tel['now'] = 4127
print(tel)
print(tel['now'])
print(sorted(tel))
#looping
for (i, v) in enumerate(['tic', 'tac', 'toe']):
        print(i, v)

app = {'err': 12, 'love': 293, 'joy': 764}
print(app)
for i, k in app.items():
        print(i, k)

#looping 2 or more sequences
questions = ['name', 'quest', 'favorite color']
answers = ['lancelot', 'the holy grail', 'blue']
for q, a in zip(questions, answers):
        print('Whats your {0}? It is {1} '.format(q, a))

question_s = [input("What's your name: "), input("What is your Quest: ")]
s =  question_s
print(f'Your name is: {s[0]}')
print(f"Your quest is: {s[1]}")

print(s)