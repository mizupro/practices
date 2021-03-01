import os
import requests
from bs4 import BeautifulSoup

URL = 'https://www.melon.com/chart/index.htm'
USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'

headers = {'User-Agent': USER_AGENT}
html = requests.get(URL, headers=headers)
soup = BeautifulSoup(html.text, 'html.parser')
spans = soup.select('.calendar_prid > span')
now = f'{spans[0].get_text(strip=True)}-{spans[1].get_text(strip=True)}'

rows = soup.select_one('tbody').select('tr')

song_list = []

for row in rows:
    infos = row.select_one('.wrap_song_info').select('a')
    title = infos[0].get_text()
    artist = infos[1].get_text()
    song = {'title': title, 'artist': artist}
    song_list.append(song)

with open('melon 24hits.txt', 'w') as file:
    file.write(f'{now}\n')
    for i, song in enumerate(song_list):
        row = f"\n#{i+1}\n{song['title']}\n{song['artist']}\n"
        file.write(row)
        #print(row)

print('completed')