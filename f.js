const request = require('request');


var urlToCrawl = 'http://www.fussball.de/spieltagsuebersicht/kreisklasse-a-bruchsal-kreis-bruchsal-kreisklasse-a-herren-saison1516-baden/-/staffel/01OVJK3T6S00000BVV0AG813VS7LCAJK-G#!/section/table';

var serverUrl = 'http://localhost:5000';

var json_data = '{"league": ".fixtures-stage h2",\
									"saison": ".fixtures-stage h4",\
									"clubs": [{"elem": ".fixtures-league-table .club-name", "club": "text"}],\
									"club-logos": [{"elem": ".fixtures-league-table .club-logo span", "club-logo": "data-responsive-image"}],\
								 	"ranks": [{"elem": ".fixtures-league-table .column-rank", "rank": "text"}],\
									"games-played": [{"elem": ".fixtures-league-table tr td:nth-of-type(4)", "games-played": "text"}],\
									"games-won": [{"elem": ".fixtures-league-table tr td:nth-of-type(5)", "games-won": "text"}],\
									"games-draw": [{"elem": ".fixtures-league-table tr td:nth-of-type(6)", "games-draw": "text"}],\
									"games-lost": [{"elem": ".fixtures-league-table tr td:nth-of-type(7)", "games-lost": "text"}],\
									"goals": [{"elem": ".fixtures-league-table tr td:nth-of-type(8)", "goals": "text"}],\
									"goals-diff": [{"elem": ".fixtures-league-table tr td:nth-of-type(9)", "goals-diff": "text"}],\
									"points": [{"elem": ".fixtures-league-table tr td:nth-of-type(10)", "points": "text"}]\
								 }';

request.post(serverUrl, {form: {url: urlToCrawl, json_data: json_data}}, function(err, response, body) {
  console.log(body);
})
