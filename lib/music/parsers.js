

export const parseLatest = $ => {
  const list = $('.dlist').get();
  return list.map((item) => {
    const pl = $(item).find('p.pl').text();
    const [artist, date, type, mate, style] = pl.split('/');
    return {
      artist,
      date,
      type,
      mate,
      style,
      title: $(item).find('.pl2').text(),
      link: $(item).find('.pl2').attr('href'),
    }
  })
};