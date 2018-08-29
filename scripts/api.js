// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kent-timothy';

  const getItems = function(callback) {
    $.getJSON(BASE_URL + '/items', callback);
  };

  //proceed to problem 2?
  //want me to do this problem?
  
  return {
    getItems
  };
}());