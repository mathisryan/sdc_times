// const sample = {
//   week_day: 'Friday',
//   start_time: '19:15',
//   seat: 'standard',
//   theater_id: 3,
//   movie_id: 1
// }

const days = [0, 1, 2, 3, 4, 5, 6];
const seat = ['standard', 'recliner', '3D'];
const startTime = ['00', '15', '30', '45'];
const moviePlayCountPerDay = 6;

// theater operating hours
const open = 10;
const close = 22;

// db id
const theaterIds = [1, 2, 3, 4, 5];
// hand-picked 5 movies' id:
// Black Panther, The Avengers, Inception, Star Wars: The Last Jedi, Incredibles 2
const movieIds = [284054, 24428, 27205, 181808, 260513];

const randomIndex = array => Math.floor(Math.random() * array.length);

const generateShowtime = () => {
  const results = [];

  theaterIds.forEach((theaterId) => {
    movieIds.forEach((movieId) => {
      days.forEach((day) => {
        let count = moviePlayCountPerDay;
        while (count > 0) {
          const showtime = {};
          showtime.start_time = `${Math.floor(Math.random() * (close - open) + open)}:${startTime[randomIndex(seat)]}`;
          showtime.week_day = day;
          showtime.seat = seat[randomIndex(seat)];
          showtime.theater_id = theaterId;
          showtime.movie_id = movieId;
          results.push(showtime);
          count--;
        }
      });
    });
  });

  return results;
};

module.exports = generateShowtime;
