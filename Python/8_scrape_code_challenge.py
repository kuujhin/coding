import requests
from bs4 import BeautifulSoup

keywords = ["flutter", "python", "golang"]

all_jobs = []

class Job:

  def __init__(self, job, company, location, url):
    self.job = job
    self.company = company
    self.location = location
    self.url = url

  def introduce(self):
    print(f"Title: {self.job}\nCompany: {self.company}\n"
          f"Location: {self.location}.\nURL: {self.url}\n")


def scrape_page(url):
  response = requests.get(
      url,
      headers={
          "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
      })
  soup = BeautifulSoup(response.text, "html.parser")
  jobs = soup.find("table", id="jobsboard").find_all("td", class_="company position company_and_position")[1:]

  for job in jobs:
    job_title = job.find("a", class_="preventLink").find("h2").text
    company_name = job.find("h3").text
    location_list = []
    locations = job.find_all("div", class_="location")
    for location in locations:
      location_list.append(location.text)
    job_link = job.find("a", class_="preventLink")["href"]

    job_data = Job(
        job_title.replace("\n", ""),
        company_name.replace("\n", ""),
        location_list,
        f"https://remoteok.com/{job_link}",
    )
    all_jobs.append(job_data)


for keyword in keywords:
  scrape_page(f"https://remoteok.com/remote-{keyword}-jobs")

for job in all_jobs:
  job.introduce()

print(len(all_jobs))
