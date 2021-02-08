let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?", "");
    }
}

start();

const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
};

function writeYourGenres () {
    for (let i=1; i <= 4; i++){
        let GenresName = prompt("Ваш любимый жанр под номером "+ i +"?", "");

        if (GenresName != "") {
            personalMovieDB.genres[i-1] = GenresName;
            console.log('Done genres');
        } else {
            console.log('Error');
            i--;
        }
    }
}


// let i=0;
//
// while (i < 3) {
//     let FilmName = prompt("Название фильма, которые вы посмотрели?", "");
//     let RateFilm = +prompt("На сколько оцените его?", "");
//
//     if (FilmName != null && RateFilm != null && FilmName != '' && RateFilm != '' && FilmName.length < 50) {
//         personalMovieDB.movies[FilmName] = RateFilm;
//         console.log("Done");
//     } else {
//         console.log("Error")
//         i--
//     }
//     i++;
// }

function remebmerMyFilms() {
    for (let i = 0; i < 2; i++) {
        let FilmName = prompt("Название фильма, которые вы посмотрели?", "");
        let RateFilm = +prompt("На сколько оцените его?", "");

        if (FilmName != null && RateFilm != null && FilmName != '' && RateFilm != '' && FilmName.length < 50) {
            personalMovieDB.movies[FilmName] = RateFilm;
            console.log('Done!');
        } else {
            console.log('Error');
            i--;
        }
    }
}

remebmerMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Ошибка");
    }
}

detectPersonalLevel();

function ShowMyDB() {
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB)
    } else {
        console.log('Это приватная информация!')
    }
}

writeYourGenres();
ShowMyDB();


