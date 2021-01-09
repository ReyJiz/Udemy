const numberOfFilms = +prompt("Сколько фильмов вы уже посмтрели?", "");

const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}

console.log(personalMovieDB);