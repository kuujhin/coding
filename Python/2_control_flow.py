# #if
# if 10 > 5:
#   print("True!")

# a = 10

# if a == 10:
#   print("True!")

# name = "jhin"
# if name == "jhin":
#   print("True!")

# password_correct = True
# if password_correct:
#   print("Here is your money")
# else:
#   print("Wrong password")

# winner = 10

# if winner > 10:
#   print("Winner is greater than 10")
# elif winner < 10:
#   print("Winner is less than 10")
# else:
#   print("Winner is 10")



# age = int(input("How old are you?"))

# if age < 18:
#   print("You can't drink")
# elif age >= 18 and age <= 35:
#   print("You drink beer!")
# elif age == 60 or age == 70:
#   print("Birthday party!")
# else:
#   print("You can drink!")
# from random import randint

# user_choice = int(input("Choose number."))
# pc_choice = randint(1,50) # import randint 

# if user_choice == pc_choice:
#   print("You won!")
# elif user_choice > pc_choice:
#   print("Lower! Computer chose", pc_choice)
# elif user_choice < pc_choice:
#   print("Higher! Computer chose", pc_choice)  

# distance = 0

# while distance < 20:
#   print("I'm running:", distance, "km")
#   distance = distance + 1


from random import randint

print("Welcome to Python Casino!")
pc_choice = randint(1,100) 

playing = True

while playing:
  user_choice = int(input("Choose number (1-100)"))
  if user_choice == pc_choice:
    print("You won!")
    playing = False
  elif user_choice > pc_choice:
    print("Lower!")
  elif user_choice < pc_choice:
    print("Higher!")  