# Unofficial Fussball.de API

This project uses [Jam API](https://github.com/gavindinubilo/jam-api). It turns CSS selectors into a JSON accessible API.

## JSON Output

```
{
    "league": "Kreisklasse A Bruchsal",
    "saison": "Saison 15/16",
    "clubs": [
        {
            "index": 0,
            "value": {
                "club": "SV Oberderdingen"
            }
        },
        {...}
      ],
    "club-logos": [
        {
            "index": 0,
            "value": {
                "club-logo": "http://www.fussball.de/..."
            }
        },
        {...}
      ],
    "ranks": [...],
    "games-played": [...],
    "games-won": [...],
    "games-draw": [...],
    "games-lost": [...],
    "goals": [...],
    "goals-diff": [...],
    "points": [...]      
  }  
```


## How to get started

This code runs with [Node.js](nodejs.org). Make sure you have it installed.

- Pull this repository.
- `$ cd unofficial-fussball-de-api`
- `$ npm install`
- Open `f.js` and edit `var urlToCrawl`. This is the URL to your league.
- Start Node.js server: `$ node index.js`
- Open another terminal window
- `$ node f.js`
- You should see the JSON output in your terminal.

## A piece of note

I've got no affiliation with [fussball.de](fussball.de). Changes in the code may break this API.