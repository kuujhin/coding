# ### function argument ###
# def plus(a, b):
#   return a + b

# # positional argument
# plus(1, 2)

# # keyword argument
# plus(a=1, b=2)

from playwright.sync_api import sync_playwright
import time
from bs4 import BeautifulSoup
p = sync_playwright().start()

browser = p.chromium.launch(headless=False)

page = browser.new_page()

# page.goto("https://www.wanted.co.kr/")

# time.sleep(3)

# # page.screenshot(path="screenshot.png")

# page.click("button.Aside_searchButton__Xhqq3")
# # page.locator("button.Aside_searchButton__Xhqq3").click()

# time.sleep(1)

# page.get_by_placeholder("검색어를 입력해 주세요.").fill("flutter")

# time.sleep(1)

# page.keyboard.down("Enter")

# time.sleep(3)

# page.click("a#search_tab_position")

# time.sleep(3)

page.goto("https://www.wanted.co.kr/search?query=flutter&tab=position")

for x in range(4):
  page.keyboard.down("End")
  time.sleep(3)

content = page.content()

p.stop()

soup = BeautifulSoup(content, "html.parser")

jobs = soup.find_all("div", class_="JobCard_container__FqChn")

jobs_db = []

for job in jobs:
  link = f"https://www.wanted.co.kr{job.find('a')['href']}"
  title = job.find("strong", class_="JobCard_title__ddkwM").text
  company_name = job.find("span", class_="JobCard_companyName__vZMqJ").text
  location = job.find("span", class_="JobCard_location__2EOr5").text
  reword = job.find("span", class_="JobCard_reward__sdyHn").text

  job = {
    "title": title,
    "company_name": company_name,
    "location": location,
    "reword": reword,
    "link": link,
  }

  jobs_db.append(job)

print(jobs_db)
print(len(jobs_db))