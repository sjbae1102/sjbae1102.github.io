/**
 * Shared CV line generation for Biography (Node validate + browser site-render).
 */
function metricsToCvBold(metricsHtml) {
  if (!metricsHtml) return '';
  const ifMatch = metricsHtml.match(/<\/span>([\d.]+(?:\s*\(\d{4}\))?)\s*<span class="metric-dot">/);
  const jcrMatch = metricsHtml.match(/JCR\s*([\d.]+%)/);
  if (ifMatch && jcrMatch) {
    return ` <b>(Impact Factor: ${ifMatch[1]}, JCR: ${jcrMatch[1]})</b>`;
  }
  return '';
}

function publicationToCvHtml(pub) {
  const venue = (pub.venueHtml || '').replace(/\s*<a[^>]*>\[Dataset\]<\/a>/, '');
  return `${pub.authorsHtml}. ${pub.title}. ${venue}${metricsToCvBold(pub.metricsHtml)}`;
}

function listCvPublications(data) {
  const rows = [];
  ['international', 'domestic'].forEach((section) => {
    (data.publications[section] || []).forEach((pub) => {
      rows.push({
        id: pub.id,
        year: String(pub.year),
        html: publicationToCvHtml(pub),
      });
    });
  });
  return rows;
}

function listPublishedPublicationIds(data) {
  const ids = [];
  ['international', 'domestic'].forEach((section) => {
    (data.publications[section] || []).forEach((pub) => {
      if (pub.id) ids.push(pub.id);
    });
  });
  return ids;
}

module.exports = {
  metricsToCvBold,
  publicationToCvHtml,
  listCvPublications,
  listPublishedPublicationIds,
};
