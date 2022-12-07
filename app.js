// Storage Controller



// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 800},
      {id: 1, name: 'Ice Cream', calories: 400},
      {id: 2, name: 'Soup', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();




// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list'
  }
  
  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> ${item.calories} Calories
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i
        ></a>
      </li>`;
      });

      // Insert list Items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
})();




// App Controller
const App = (function(ItemCtrl, UICtrl){
  
  // Public methods
  return {
    init: function(){
      // Fetch Items from Data Structure
      const items = ItemCtrl.getItems();

      // Populate list with Items
      UICtrl.populateItemList(items);

    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();