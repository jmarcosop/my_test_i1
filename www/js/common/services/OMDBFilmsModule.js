angular.module('OMDBFilmsModule', ['FilmModel'])
.constant('filmNames', [
    'Martian',
    'Interstellar',
    'Leaked Lightsaber Scene: Star Wars Episode VII',
    'Jupiter Ascending',
    'Batman v Superman',
    'Moonwalkers',
    'Independence Day: Resurgence',
    'Star Trek Beyond',
    'The Space Between Us',
    'Rogue One: A Star Wars Story - World Premiere'
])

.constant('filmList', [
    {"Title":"Martian","Year":"2010","Rated":"N/A","Released":"14 May 2010","Runtime":"N/A","Genre":"Animation, Short","Director":"Brandon Hex","Writer":"Nik Havert, Mark Starks","Actors":"Ben Maclaine, Deanna Meske, Mark Starks, Alex Mathias","Plot":"Martian and Terra discover a lifeless Jovian freighter is not abandoned.","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMzQzMDEyMl5BMl5BanBnXkFtZTgwMTA3NjY5MDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"}],"Metascore":"N/A","imdbRating":"6.2","imdbVotes":"12","imdbID":"tt1997445","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Interstellar","Year":"2014","Rated":"PG-13","Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan","Actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow","Plot":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.","Language":"English","Country":"USA, UK, Canada, Iceland","Awards":"Won 1 Oscar. Another 41 wins & 142 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.6","imdbVotes":"1,047,005","imdbID":"tt0816692","Type":"movie","DVD":"N/A","BoxOffice":"$158,737,441","Production":"Paramount Pictures","Website":"http://www.InterstellarMovie.com/","Response":"True"},
    {"Title":"Leaked Lightsaber Scene: Star Wars Episode VII","Year":"2014","Rated":"N/A","Released":"20 Dec 2014","Runtime":"2 min","Genre":"Animation, Short","Director":"Doug Bresler","Writer":"Kevin Corrigan","Actors":"N/A","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://secure.netflix.com/us/boxshots/ghd/80058070.jpg","Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt4296730","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Jupiter Ascending","Year":"2015","Rated":"PG-13","Released":"06 Feb 2015","Runtime":"127 min","Genre":"Action, Adventure, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Mila Kunis, Channing Tatum, Sean Bean, Eddie Redmayne","Plot":"A young woman discovers her destiny as an heiress of intergalactic nobility and must fight to protect the inhabitants of Earth from an ancient and destructive industry.","Language":"English, Russian","Country":"USA, Australia","Awards":"4 wins & 16 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNzk2MjA2NF5BMl5BanBnXkFtZTgwMjEwNzk3MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.3/10"},{"Source":"Rotten Tomatoes","Value":"26%"},{"Source":"Metacritic","Value":"40/100"}],"Metascore":"40","imdbRating":"5.3","imdbVotes":"150,209","imdbID":"tt1617661","Type":"movie","DVD":"02 Jun 2015","BoxOffice":"$43,733,037","Production":"Warner Bros. Pictures","Website":"http://www.jupiterascending.com/","Response":"True"},
    {"Title":"Batman v Superman","Year":"2013","Rated":"N/A","Released":"20 Nov 2013","Runtime":"N/A","Genre":"Short, Comedy","Director":"Flober, Adrien Ménielle","Writer":"Adrien Ménielle","Actors":"Nicolas Berno, Kevin Eaton, Adrien Ménielle, Valentin Vincent","Plot":"N/A","Language":"French","Country":"France","Awards":"N/A","Poster":"http://pre07.deviantart.net/02d8/th/pre/i/2015/283/5/6/batman_v_superman___dawn_of_justice__poster_by_goxiii-d9cky11.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"}],"Metascore":"N/A","imdbRating":"8.1","imdbVotes":"23","imdbID":"tt6130880","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Moonwalkers","Year":"2015","Rated":"R","Released":"15 Jan 2016","Runtime":"107 min","Genre":"Comedy","Director":"Antoine Bardou-Jacquet","Writer":"Dean Craig (a film written by), Antoine Bardou-Jacquet (story by)","Actors":"Rupert Grint, Ron Perlman, Robert Sheehan, Stephen Campbell Moore","Plot":"After failing to locate the legendary Stanley Kubrick, an unstable CIA agent must instead team up with a seedy rock band manager to develop the biggest con of all time-staging the moon landing.","Language":"English","Country":"France, Belgium","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyNzU4MjMyNF5BMl5BanBnXkFtZTgwMDQ0NzQ0NzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.1/10"},{"Source":"Metacritic","Value":"39/100"}],"Metascore":"39","imdbRating":"6.1","imdbVotes":"6,192","imdbID":"tt2718440","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Independence Day: Resurgence","Year":"2016","Rated":"PG-13","Released":"24 Jun 2016","Runtime":"120 min","Genre":"Action, Adventure, Sci-Fi","Director":"Roland Emmerich","Writer":"Nicolas Wright (screenplay), James A. Woods (screenplay), Dean Devlin (screenplay), Roland Emmerich (screenplay), James Vanderbilt (screenplay), Dean Devlin (story by), Roland Emmerich (story by), Nicolas Wright (story by), James A. Woods (story by), Dean Devlin (based on characters created by), Roland Emmerich (based on characters created by)","Actors":"Liam Hemsworth, Jeff Goldblum, Jessie T. Usher, Bill Pullman","Plot":"Two decades after the first Independence Day invasion, Earth is faced with a new extra-Solar threat. But will mankind's new space defenses be enough?","Language":"English, Mandarin","Country":"USA","Awards":"1 win & 15 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMTg5MTg4OV5BMl5BanBnXkFtZTgwMzkzMjY5NzE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"5.3/10"},{"Source":"Rotten Tomatoes","Value":"31%"},{"Source":"Metacritic","Value":"32/100"}],"Metascore":"32","imdbRating":"5.3","imdbVotes":"126,209","imdbID":"tt1628841","Type":"movie","DVD":"18 Oct 2016","BoxOffice":"$103,137,295","Production":"20th Century Fox","Website":"http://www.foxmovies.com/movies/independence-day-resurgence","Response":"True"},
    {"Title":"Star Trek Beyond","Year":"2016","Rated":"PG-13","Released":"22 Jul 2016","Runtime":"122 min","Genre":"Action, Adventure, Sci-Fi","Director":"Justin Lin","Writer":"Simon Pegg, Doug Jung, Gene Roddenberry (based upon \"Star Trek\" created by)","Actors":"Chris Pine, Zachary Quinto, Karl Urban, Zoe Saldana","Plot":"The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a new ruthless enemy who puts them and everything the Federation stands for to the test.","Language":"English","Country":"USA, Hong Kong, China","Awards":"Nominated for 1 Oscar. Another 1 win & 23 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZDRiOGE5ZTctOWIxOS00MWQwLThlMDYtNWIwMDQwNzBjZDY1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.1","imdbVotes":"163,086","imdbID":"tt2660888","Type":"movie","DVD":"01 Nov 2016","BoxOffice":"$158,804,470","Production":"Paramount Pictures","Website":"http://www.startrekmovie.com/","Response":"True"},
    {"Title":"The Space Between Us","Year":"2017","Rated":"PG-13","Released":"03 Feb 2017","Runtime":"120 min","Genre":"Adventure, Drama, Romance","Director":"Peter Chelsom","Writer":"Allan Loeb (screenplay), Stewart Schill (story by), Richard Barton Lewis (story by), Allan Loeb (story by)","Actors":"Gary Oldman, Janet Montgomery, Trey Tucker, Scott Takeda","Plot":"The first human born on Mars travels to Earth for the first time, experiencing the wonders of the planet through fresh eyes. He embarks on an adventure with a street smart girl to discover how he came to be.","Language":"English","Country":"USA","Awards":"1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzODU1OTkwN15BMl5BanBnXkFtZTgwMDA3MTMwMDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"},{"Source":"Rotten Tomatoes","Value":"17%"},{"Source":"Metacritic","Value":"33/100"}],"Metascore":"33","imdbRating":"6.4","imdbVotes":"15,232","imdbID":"tt3922818","Type":"movie","DVD":"16 May 2017","BoxOffice":"$7,829,766","Production":"STX Entertainment","Website":"http://stxmovies.com/thespacebetweenus/","Response":"True"},
    {"Title":"Rogue One: A Star Wars Story - World Premiere","Year":"2016","Rated":"N/A","Released":"10 Dec 2016","Runtime":"89 min","Genre":"Reality-TV","Director":"N/A","Writer":"N/A","Actors":"Anthony Carboni, Andi Gutierrez, David W. Collins, Peter Townley","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZWMyOThiOTMtYjE3MS00ZTVlLTllY2EtOTMxN2MzM2RlMDFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"}],"Metascore":"N/A","imdbRating":"7.3","imdbVotes":"322","imdbID":"tt6323140","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"}


])

.constant('omdbApi', (function(){
    var namePlaceholder = '[namePlaceholder]';
    return { 
        url: '../../json/films.json',
        namePlaceholder: namePlaceholder
    }
})()
)

.factory('FilmService', function($http, $q, $filter, filmList, filmNames, omdbApi, Film){
    var filmsService = {};

    filmsService.films = [];
    filmsService.selectedFilm = null;

    var urlFromTitle = function (title){
        var queryString = title.split(' ').join('+');

        var film = $filter('filter')(filmList, function (d) {return d.Title === title;})[0];
        return film;
    }

    var urlPositionTitle = function (title){
        var pos = filmList.map(function(d) { return d['Title']; }).indexOf(title);

        return pos;
    }

    var selectFilmByTitle = function(title){
        for(var i= 0; i < filmsService.films.length; i++){
            if(filmsService.films[i] === title){
                return filmsService.films[i];
            }
        };
        return null;
    };

    filmsService.getFilm = function(title){
        var selectedFilm = {};
        if (urlFromTitle(title))
            selectedFilm = urlFromTitle(title);
        
        return selectedFilm;
    };

    filmsService.getFilmPosition = function(title){
        var selectedFilm = {};
        if (urlFromTitle(title))
            selectedFilm = urlPositionTitle(title);
        
        return selectedFilm;
    };

    filmsService.getFilms = function(){

        for(var i=0; i<filmNames.length; i++){
            if(urlFromTitle(filmNames[i])) {
                filmsService.films.push(Film.build(urlFromTitle(filmNames[i])));
            }
        }
        return filmsService.films;
    };

    return filmsService;

})