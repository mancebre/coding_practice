# pip3 install requests
# pip3 install beautifulsoup4

import requests
from bs4 import BeautifulSoup
import json

URL = 'https://sr.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%B0%D0%BA_%D1%81%D1%80%D0%BF%D1%81%D0%BA%D0%B8%D1%85_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0'
page = requests.get(URL)

cirilica = [
    "А", "Б", "В", "Г", "Д", "Ђ", "Е", "Ж", "З", "И",
    "Ј", "К", "Л", "Љ", "М", "Н", "Њ", "О", "П", "Р",
    "С", "Т", "Ћ", "У", "Ф", "Х", "Ц", "Ч", "Џ", "Ш"
]

all_names = []

soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find(id='mw-content-text')
tables = results.find_all('table')
for table in tables:
    trs = table.find_all('tr')
    for tr in trs:
        tds = tr.find_all('td')
        for td in tds:
            links = td.find_all('a')
            for link in links:
                name = link.text
                if name in cirilica:
                    continue
                all_names.append(name)
                # print(name)
                # print("################################################################")
print(all_names)

with open('person_names.json', 'w') as outfile:
    json.dump(all_names, outfile, ensure_ascii=False)

# trs = tables.find_all('tr')
# tds = trs.find_all('td')
# links = trs.find_all('a')

# for tr in trs:
#     link = tr.find('a')
#     if link is None:
#         continue
#     name = link.text
#     print(name)
#     print("################################################################")


# count_names = 0
# for name in male_names_ul:
#     name_raw = name.find_all('li')
#     if name_raw is None:
#         continue
#     name_clean = name_raw.text.strip()
#     count_names = count_names + 1
#     print(name_clean)

# print("Names found: ")
# print(count_names)
#mw-content-text > div > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(1) > a