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
- Open `router.js` and edit `var fussballDeUrl`. This is the URL to your league.
- Start Node.js server: `$ node server.js`
- Visit [localhost:5000](localhost:5000).

## See in Action
[https://fussball-de-api.herokuapp.com](https://fussball-de-api.herokuapp.com)

## A piece of note

I've got no affiliation with [fussball.de](fussball.de). Changes in the code may break this API.