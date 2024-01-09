glb_name = "Sally"

def change_name():
    global glb_name
    glb_name = "Dante"

change_name()
print(glb_name)  