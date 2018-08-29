// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kent-timothy';

  const getItems = function(callback) {
    $.getJSON(BASE_URL + '/items', callback);
  };

  const createItem = function(name, callback) {
    const newItem = JSON.stringify({
      name: name,
    });

    $.ajax(
      {
        url: BASE_URL + '/items',
        method: 'POST',
        contentType: 'application/json',
        data: newItem,
        success: callback
      }
    )
  };

  //proceed to problem 2?
  //want me to do this problem?
  
  return {
    getItems,
    createItem
  };
}());