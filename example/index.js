
const Douban = require('..');

const douban = new Douban({
  apikey: '0b2bdeda43b5688921839c8ecb20399b'
});

(async () => {

  const movie = await douban.movie(26266893);
  const comments = await douban.comments(26266893);
  console.log(comments);

})();