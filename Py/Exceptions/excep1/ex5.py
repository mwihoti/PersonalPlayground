try:
    raise NameError("Hi there")
except NameError:
    print("An exemption flew away")
    raise