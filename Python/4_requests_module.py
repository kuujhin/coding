#pypi.org
from requests import get

websites = (
  "google.com", 
  "airbnb.com", 
  "https://twitter.com", 
  "facebook.com",
  "https://tiktok.com"
)

results = {}

for website in websites:
  if not website.startswith("https://"):
    website = f"https://{website}"
  response = get(website)
  if response.status_code == 200:
    print(f"{website} is OK")
    results[website] = "OK"
  else:
    print(f"{website} not OK")
    results[website] = "FAILED"

print(results)
