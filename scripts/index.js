/* global shoppingList, store, api */

$(function() {
    
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  

});


api.getItems(function(data) {
  console.log(data);
});