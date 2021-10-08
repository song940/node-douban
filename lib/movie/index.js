import cheerio from 'cheerio';
import { get, readStream } from 'tiny-network';
import { parsePlaying } from './parsers.js';

export const playing = (city) => {
  return Promise
    .resolve()
    .then(() => get(`https://movie.douban.com/cinema/nowplaying/${city}/`))
    .then(readStream)
    .then(cheerio.load)
    .then(parsePlaying)
};