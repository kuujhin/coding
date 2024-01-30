# variables
a = 1
b = 2
c = a + b
print(c)

#booleans and strings
True
False
my_name = "jhin"
print("hello world")

#functions
def say_hello():
  print("hello how r u?")

def say_bye():
  print("bye bye")
  say_hello()

say_bye()


#parameter, argument
def say_hello(user_name):
  print("hello", user_name, "how r u?")

say_hello("jhin")
say_hello("nico")
print("hello world")

#multiple parameters
def say_hello(user_name, user_age):
  print("hello", user_name)
  print("you are", user_age, "years old")

say_hello("jhin", 23)
say_hello(23, "jhin")
print(1,2,3,4,5,6,7)


#default parameter

def say_hello(user_name="anonymous"):
  print("hello", user_name)

say_hello("jhin")
say_hello()

def plus(a = 0, b = 0):
  print(a + b)

plus(2)

#return

def tax_calc(money):
  return money * 0.35

def pay_tax(tax):
  print("thank you for paying", tax)

to_pay = tax_calc(15000)
pay_tax(to_pay)
pay_tax(tax_calc(15000))

my_name = "jhin"
my_age = 23
my_color_eyes = "black"

print(f"Hello I'm {my_name}, I have {my_age} years in the earth, {my_color_eyes} is my eye color")

def make_juice(fruit):
  return f"{fruit}+🥤"

def add_ice(juice):
  return f"{juice}+🧊"

def add_sugar(iced_juice):
  return f"{iced_juice}+🍬"

juice = add_sugar(add_ice(make_juice("🍎")))

print(juice)