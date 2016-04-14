/* global process*/
import Superagent from 'superagent';
import Origin from 'get-location-origin';

/**
 * 依據現有環境組API網址
 * @param  {[type]} url API位址
 * @return {[type]}     完整網址
 */
function combineUrl(url) {
  if (process.env.NODE_ENV === 'development') {
    return Origin.replace(location.port, '3000') + url;
  }
  return url;
}

/**
 * 取API
 * @param  {[type]} url API網址
 * @return {[type]}     回傳結果
 */
export function getJSON(url) {
  return new Promise((resolve, reject) => {
    Superagent
      .get(combineUrl(url))
      .end((err, res) => {
        if (err) {
          reject(err);
          return null;
        }
        resolve(res.body);
      });
  });
}

/**
 * 送API
 * @param  {string} url  API網址
 * @param  {object} data 表單資料
 * @return {object}      回傳結果
 */
export function submitData(url, data) {
  return new Promise((resolve, reject) => {
    Superagent
      .post(combineUrl(url))
      .type('form')
      .sent(data)
      .end((err, res) => {
        if (err) {
          reject(err);
          return null;
        }
        resolve(res.body);
      });
  });
}
