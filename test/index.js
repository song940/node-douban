import assert from 'assert';
import test from './test.js';
import * as Douban from '../index.js';

test("Movie#playing", async () => {
  const movies = await Douban.Movie.playing('beijing');
  assert.ok(movies);
});

test("Music#latest", async () => {
  const musics = await Douban.Music.latest();
  assert.ok(musics);
});