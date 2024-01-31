import requests

movie_ids = [238, 680, 550, 185, 641, 515042, 152532, 120467, 872585, 906126, 840430]

for movie_id in movie_ids:
    api = f"https://nomad-movies.nomadcoders.workers.dev/movies/{movie_id}"
    response = requests.get(api)
    if response.status_code != 200:
        print(f"Error: {response.status_code}")
    else:
        data = response.json()
        print("title: ", data["title"])
        print("overview: ", data["overview"])
        print("vote_average: ", data["vote_average"])
