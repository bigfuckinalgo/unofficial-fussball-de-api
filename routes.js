'use strict';

let $ = require('cheerio');
let request = require('request');
let convert = require('./html_to_json');

var fussballDeUrl = 'http://www.fussball.de/spieltagsuebersicht/kreisklasse-a-bruchsal-kreis-bruchsal-kreisklasse-a-herren-saison1516-baden/-/staffel/01OVJK3T6S00000BVV0AG813VS7LCAJK-G#!/section/table';

var jsonData = {
	"league": ".fixtures-stage h2",
	"saison": ".fixtures-stage h4",
	"clubs": [{
		"elem": ".fixtures-league-table .club-name",
		"club": "text"
	}],
	"club-logos": [{
		"elem": ".fixtures-league-table .club-logo span",
		"club-logo": "data-responsive-image"
	}],
	"ranks": [{
		"elem": ".fixtures-league-table .column-rank",
		"rank": "text"
	}],
	"games-played": [{
		"elem": ".fixtures-league-table tr td:nth-of-type(4)",
		"games-played": "text"
	}],
	"games-won": [{
		"elem": ".fixtures-league-table tr td:nth-of-type(5)",
		"games-won": "text"
	}],
	"games-draw": [{
		"elem": ".fixtures-league-table tr td:nth-of-type(6)",
		"games-draw": "text"
	}],
	"games-lost": [{
		"elem": ".fixtures-league-table tr td:nth-of-type(7)",
		"games-lost": "text"
	}],
	"goals": [{
		"elem": ".fixtures-league-table tr td:nth-of-type(8)",
		"goals": "text"
	}],
	"goals-diff": [{
		"elem": ".fixtures-league-table tr td:nth-of-type(9)",
		"goals-diff": "text"
	}],
	"points": [{
		"elem": ".fixtures-league-table tr td:nth-of-type(10)",
		"points": "text"
	}]
};

module.exports = function(server) {

  server.route({
    method: 'GET',
    path: '/',
    handler: function(req, res) {
      request(fussballDeUrl, function(err, data, body) {
        if (err) return res(err.toString());
        try {
          try {
            return res(convert(jsonData, $.load(body)));
          } catch(e) {
            return res({'error': 'A provided CSS selector was not found on the provided '});
          }
        } catch(e) {
          console.log(e);
          return res({'error': 'invalid JSON'});
        }
      });
    }
  });

};
