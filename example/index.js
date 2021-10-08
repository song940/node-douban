import { Movie, Music } from '../index.js';

(async () => {
  const movies = await Movie.playing('beijing');
  console.log(movies);


  const musics = await Music.latest();
  console.log(musics);
})();