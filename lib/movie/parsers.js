

export const parsePlaying = $ => {
  return $('.list-item')
    .get()
    .map(i => {
      const item = $(i);
      return {
        id: item.attr('id'),
        title: item.attr('data-title'),
        score: item.attr('data-score'),
        duration: item.attr('data-duration'),
        region: item.attr('data-region'),
        director: item.attr('data-director'),
        actors: item.attr('data-actors'),
        poster: item.find('.poster img').attr('src'),
        link: `https://movie.douban.com/subject/${item.attr('id')}`,
      };
    }).filter(x => x)
};