# name = "jhin"

# print(name.upper())
# print(name.capitalize())
# print(name.startswith("j"))
# print(name.replace("n", "🤣"));
# print(name.endswith("n"))

# #List
# days_of_week = ["Mon","Tue","Wed","Thu","Fri"]

# print(days_of_week.count("Wed"))
# print(days_of_week)

# days_of_week.clear()
# print(days_of_week)

# days_of_week = ["Mon","Tue","Wed","Thu","Fri"]

# days_of_week.append("Sat")
# print(days_of_week)

# days_of_week.append("Sun")
# print(days_of_week)

# days_of_week.remove("Fri")
# print(days_of_week)

# days_of_week.reverse()
# print(days_of_week)

# days_of_week = ["Mon","Tue","Wed","Thu","Fri"]
# print(days_of_week)

# print(days_of_week[2])

# #Tuple
# days = ("Mon","Tue","Wed")

# print(days[0])
# print(days[-1])
# print(days[-2])

#Dictionary
player = {
    'name': 'jhin',
    'age': 12,
    'alive': True,
    'fav_food': ["🍕","🍔"],
}
print(player)
print(player.get('age'))
print(player.get('fav_food'))
print(player['fav_food'])

print(player)
player.pop('age')
print(player)

player['xp'] = 1500
print(player)

player['fav_food'].append("🍜")
print(player['fav_food'])