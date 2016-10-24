export const parseQueryString = () => {
  if (typeof window === 'undefined') {
    return {};
  }
  const str = window.location.search;
  const objURL = {};
  str.replace(
    new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
    (a0, a1, a2, a3) => {
      objURL[a1] = a3;
    }
  );
  return objURL;
};

export const getObjectValue = (obj) => obj[Object.keys(obj)[0]];

export const getUTCTime = (date) => {
  const dateObject = new Date(date);
  return ('0' + dateObject.getUTCHours())
      .slice(-2) + ':' + ('0' + dateObject.getUTCMinutes())
      .slice(-2) + ':' + ('0' + dateObject.getUTCSeconds())
      .slice(-2);
};

export const strToXml = (str) => {
  let xmlDoc;
  let parser;
  if (window.DOMParser) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(str, 'text/xml');
  } else if (window.ActiveXObject) {
    xmlDoc = new window.ActiveXObject('Microsoft.XMLDOM');
    xmlDoc.async = false;
    xmlDoc.loadXML(str);
  }
  return xmlDoc;
};
