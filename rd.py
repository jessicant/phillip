icon = ("(●´ω｀●)")
name = "Luciifer"
age = 0
weight = 0.83
hungry = False
hunger = 100
quit = False

def startup():
  print("Hi! Say hi to my pet! I programmed and raised him myself!\n~Jess")
  print("Meow! My name is " + name + "! I'm so happy to see you!")
  print(icon)

def stats():
  print(icon)
  print("~Stats~ \nweight: " + str(weight) + "lb")

  if hungry:
    print(name + " is hungry!")

  if weight > 15:
    "That is one big chonkster!"
  
  if age > 1:
    "He's still a baby"
  
def feeding():
  global hunger
  if hungry:
    hunger  += 25
  else:
    if hunger > 150:
      weight += 1
  print("CROOOOOOMCH")

def pat():
  print("purrrr thank you for the pats!")

def brush():
  print("purrrrr yis my fur is so shiny!")

def bathe():
  print("I am clean but at what cost")

def sleep():
  print("(︶｡︶✽) I slep")
startup()
while not quit:
  stats()
  user_input = input('What would you like to do? 0 quit, 1 feed, 2 pat, 3 brush, 4 bathe, 5 put to sleep ' )
  user_input = int(user_input)
  print()
  print()
  if user_input == 0:
    quit = True
  elif user_input == 1:
    feeding()
  elif user_input == 2:
    pat()
  elif user_input == 3:
    brush()
  elif user_input == 4:
    bathe()
  elif user_input == 5:
    sleep()
    quit = True
  else:
    print("Mroooooow >:/ \nInvalid input")
  print()
  print()

print("Bye!! I'll miss you!!")