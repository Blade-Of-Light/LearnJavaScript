//BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
<<<<<<< Updated upstream
        this.description = description;
        this.value = value;
=======
        this.desc = desc;
        this.val = val;
>>>>>>> Stashed changes
    };

    var Income = function(id, description, value) {
        this.id = id;
<<<<<<< Updated upstream
        this.description = description;
        this.value = value;
    };

=======
        this.desc = desc;
        this.val = val;
    };
>>>>>>> Stashed changes

    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem;

            //ID = Last ID + 1
            if(data.allItems[type].length > 0){
<<<<<<< Updated upstream
                ID = data.allItems[type][data.allItems[type].length - 1].ID + 1;
            } else {
                ID = 0;
=======
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
>>>>>>> Stashed changes
            }


            //create new item based of inc or exp type.
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //return new element
            data.allItems[type].push(newItem);
            return newItem;

        },
        testing: function () {
            console.log(data);
        }
    };

})();




//UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
<<<<<<< Updated upstream
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            }
=======
                type : document.querySelector(DOMstrings.inputType).value, //ill be 'inc' or 'exp'
                description : document.querySelector(DOMstrings.inputDesc).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };

        },

        addListItem: function(obj, type) {

>>>>>>> Stashed changes
        },

        getDOMstrings : function() {
            return DOMstrings;
        }
    };

})();




//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){

            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }

        });
    };

    
    var ctrlAddItem = function() {
<<<<<<< Updated upstream
            var input, newItem;
=======
        var input, newItem;
        
        //1. get the field input data
        input = UICtrl.getInput();

        //2. add to budget controller
        newItem = budgetCtrl.addItem(input.type, input.desc, input.val);

        //3. add to ui
>>>>>>> Stashed changes

            // 1. Get the field input data
            input = UICtrl.getInput();

            
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. Add item to the UI
            
            // 4. Calculate the buget
            
            // 5. Display the budget to the UI

    }

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);


controller.init();