class DogNameError(Exception):

    def __init__(self, *args, **kwargs):
        Exception.__init__(self, *args, **kwargs)

try:
    dogName = input("Whats Your dogs name : ")

    if any(char.isdigit() for char in dogName):
        raise DogNameError
    
except DogNameError:
    print("Your dog name can't contain any Number")