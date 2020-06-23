var budgetController = (function() {

    var Expense = function(id, desc, val) {
        this.id = id;
        this.desc = desc;
        this.val = val;
    }

    var Income = function(id, desc, val) {
        this.id = id;
        this.desc = desc;
        this.val = val;
    }

    var allExpenses = [];
    var allIncome = [];

    var data = {
        allItems: {
            expenses: [],
            incomes: []
        },
        totals: {
            expenses: 0,
            incomes: 0
        }
    }

    return {
        addItem: function(type, desc, val) {
            var newItem, id;

            //create new id
            id = data.allItems[type][data.allItems[type].length - 1].id + 1;

            //create new item based on 'inc'/'exp' type
            if(type === 'exp') {
                newItem = new Expense(id, desc, val);
            }  else if (type === 'inc') {
                newItem = new Income(id, desc, val);
            }
            
            //push to data structure
            data.allItems[type].push(newItem);

            //makes data public
            return newItem;
        }
    }

})();

var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return{
        getInput: function(){
            return {
                type : document.querySelector(DOMstrings.inputType).value, //ill be 'inc' or 'exp'
                description : document.querySelector(DOMstrings.inputDesc).value,
                value : document.querySelector(DOMstrings.inputValue).value,
            };

        },

        getDOMstrings : function() {
            return DOMstrings;
        }
    };

})();

var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress' , function(event) {
            console.log(event);

            if(event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    }

    var ctrlAddItem = function() {
        var input, id
        
        input = UICtrl.getInput();

        if(data.allItems.length > 0){
            id = budgetCtrl.addItem(input.type, input.description, input.val);
        } else {
            id = 0;
        }


        console.log('working');
    }

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

//init
controller.init();