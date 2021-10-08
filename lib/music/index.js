import cheerio from 'cheerio';
import { get, readStream } from "tiny-network";
import { parseLatest } from './parsers.js'

export const latest = () => {
  return Promise
    .resolve()
    .then(() => get(`https://music.douban.com/latest`))
    .then(readStream)
    .then(cheerio.load)
    .then(parseLatest)
};