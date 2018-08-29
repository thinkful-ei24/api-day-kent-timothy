// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kent-timothy';

  const getItems = function(callback) {
    $.getJSON(BASE_URL + '/items', callback);
  };

  const createItem = function(name, successCallback, errorCallback) {
    const newItem = JSON.stringify({
      name: name,
    });


    $.ajax(
      {
        url: BASE_URL + '/items',
        method: 'POST',
        contentType: 'application/json',
        data: newItem,
        success: successCallback,
        error: errorCallback //oh, i added the failure property to wrong api method
      }
    );
  };


  const updateItem = function(id, updateData, sucessCallback, errorCallBack){
  
    
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: sucessCallback,
      error: errorCallBack //do i need to write a new function to handle error?
    });
  };

  const deleteItem = function(id, successCallback, errorCallback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      success: successCallback,
      error: errorCallback
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());