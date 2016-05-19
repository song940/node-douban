'use strict';
const xttp = require('xttp');

class Douban {
  constructor(options = {}){
    Object.assign(this, {
      api: 'https://api.douban.com'
    }, options);
  }
  request(method, path, ...params){
    const { api, apikey } = this;
    return xttp({
      method,
      url: api + path,
      ...params
    }).query({ apikey }).then(res => res.auto());
  }
  /**
   * 即将上映
   */
  async coming_soon(){
    return this.request('get', '/v2/movie/coming_soon');
  }
  async in_theaters(){
    return this.request('get', '/v2/movie/in_theaters');
  }
  async weekly(){
    return this.request('get', '/v2/movie/weekly');
  }
  async top250(){
    return this.request('get', '/v2/movie/top250');
  }
  /**
   * 电影信息
   * @param {*} id 
   */
  async movie(id){
    return this.request('get', `/v2/movie/subject/${id}`);
  }
  /**
   * 电影长评
   * @param {*} id 
   */
  async movie_reviews(id){
    return this.request('get', `/v2/movie/subject/${id}/reviews`);
  }
  /**
   * 电影短评
   */
  async movie_comments(id){
    return this.request('get', `/v2/movie/subject/${id}/comments`);
  }
  async search(type, q, start, count){ // movie, book, music
    return this.request('get', `/v2/${type}/search`, { q, start, count });
  }
  async search_movie(){
    return this.search.bind(this, 'movie');
  }
  async search_book(){
    return this.search.bind(this, 'book');
  }
  async search_music(){
    return this.search.bind(this, 'music');
  }
  async celebrity(id){
    return this.request('get', `/v2/movie/celebrity/${id}`);
  }
  async celebrity_works(id){
    return this.request('get', `/v2/movie/celebrity/${id}/works`);
  }
}

module.exports = Douban;