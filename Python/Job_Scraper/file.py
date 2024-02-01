import csv


def save_to_file(file_name, site, jobs):
    file = open(
        f"./Python/Job_Scraper/file/{file_name}_{site}.csv",
        "w",
        encoding="UTF-8",
        newline="",
    )
    writer = csv.writer(file)

    writer.writerow(["Title", "Company", "Description", "Link"])

    for job in jobs:
        writer.writerow([job.title, job.company, job.description, job.url])

    file.close()
