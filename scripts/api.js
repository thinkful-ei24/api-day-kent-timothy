// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kent-timothy';

  const getItems = function(callback) {
    callback('api module works!');
  };

  console.log(getItems(callback));
  return {
    getItems
  };
}());