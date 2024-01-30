#OOP
# class Dog:

#   def __init__(self, name, breed, age):
#     self.name = name
#     self.breed = breed
#     self.age = age

#   def sleep(self):
#     print("zzzzz")


# class GuardDog(Dog):

#   def __init__(self, name, breed):
#     super().__init__(
#         name,
#         breed,
#         5,
#     )
#     self.aggresive = True

#   def rrrr(self):
#     print("stay away!")


# class Puppy(Dog):

#   def __init__(self, name, breed):
#     super().__init__(
#         name,
#         breed,
#         0.1,
#     )
#     self.spoiled = True

#   def __str__(self):
#     return f"{self.breed} puppy named {self.name}"

#   def woof_woof(self):
#     print("Woof Woof!")


# ruffus = Puppy(
#     name="Ruffus",
#     breed="Beagle",
# )

# bibi = GuardDog(
#     name="Bibi",
#     breed="Dalmatian",
# )

# ruffus.sleep()
# print(bibi)


class Player:

  def __init__(self, name, team):
    self.name = name
    self.xp = 1500
    self.team = team

  def introduce(self):
    print(f"Hello! I'm {self.name} and I play for {self.team}")


class Team:

  def __init__(self, team_name):
    self.team_name = team_name
    self.players = []
    self.xp = 0

  def add_player(self, name):
    new_player = Player(name, self.team_name)
    self.players.append(new_player)
    self.xp += new_player.xp

  def show_players(self):
    for player in self.players:
      player.introduce()

  def remove_player(self, name):
    for player in self.players:
      if player.name == name:
        self.players.remove(player) 
    self.xp -= player.xp

  def total_xp(self):
    print(f"Total XP of {self.team_name} is {self.xp}")
      
# nico = Player(
#   name="nico",
#   team="Team x"
# )

# jhin = Player(
#   name="jhin",
#   team="Team Blue"
# )

team_x = Team("Team X")
team_blue = Team("Team Blue")

team_blue.add_player("nico")
team_blue.add_player("jhin")
team_blue.show_players()
print()

team_blue.remove_player("jhin")
team_blue.show_players()
print()

team_blue.add_player("khen")
team_blue.show_players()
team_blue.total_xp()