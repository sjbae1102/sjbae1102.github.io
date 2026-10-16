/**
 * @deprecated Content is defined in data/site-data.js (SITE_DATA.news).
 * This shim remains for older script tags that still load news-data.js.
 */
if (typeof window.SITE_DATA !== 'undefined') {
  var newsData = window.SITE_DATA.news;
}
