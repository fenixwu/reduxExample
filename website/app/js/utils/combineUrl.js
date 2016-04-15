import Origin from 'get-location-origin';

/**
 * 依據現有環境組API網址
 * @param  {[type]} url API位址
 * @return {[type]}     完整網址
 */
export default function combineUrl(url) {
  if (process.env.NODE_ENV === 'development') {
    return Origin.replace(location.port, '3000') + url;
  }
  return url;
}
