$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/checkbill.feature");
formatter.feature({
  "line": 1,
  "name": "Check bill of customers",
  "description": "  As a customer,\r\n  I want to know the total price of bill that I should had paid.",
  "id": "check-bill-of-customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 238801,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "restaurant has new menu Spaghetti with price 50 with quantity 30",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "restaurant has new menu Hamburger with price 24.50 with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "restaurant has new menu ChickenFried with price 60 with quantity 18",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "restaurant has new menu FrenchFried with price 38 with quantity 42",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "restaurant has new menu Curry with price 80 with quantity 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Spaghetti",
      "offset": 24
    },
    {
      "val": "50",
      "offset": 45
    },
    {
      "val": "30",
      "offset": 62
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 431691400,
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tMenu cannot be resolved to a type\n\tname cannot be resolved or is not a field\n\tprice cannot be resolved or is not a field\n\tquantity cannot be resolved or is not a field\n\tid cannot be resolved to a variable\n\tThe method getId() of type Food must override or implement a supertype method\n\tid cannot be resolved to a variable\n\tThe method getName() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tThe method getPrice() of type Food must override or implement a supertype method\n\tprice cannot be resolved to a variable\n\tThe method getQuantity() of type Food must override or implement a supertype method\n\tquantity cannot be resolved to a variable\n\tThe method soldUnit(int) of type Food must override or implement a supertype method\n\tquantity cannot be resolved or is not a field\n\tThe method toString() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tprice cannot be resolved to a variable\n\tquantity cannot be resolved to a variable\n\r\n\tat ku.restaurant.Food.\u003cinit\u003e(Food.java:3)\r\n\tat ku.restaurant.ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(ElectionStepdefs.java:29)\r\n\tat ✽.Given restaurant has new menu Spaghetti with price 50 with quantity 30(features/checkbill.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 24
    },
    {
      "val": "24.50",
      "offset": 45
    },
    {
      "val": "15",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 24
    },
    {
      "val": "60",
      "offset": 48
    },
    {
      "val": "18",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 24
    },
    {
      "val": "38",
      "offset": 47
    },
    {
      "val": "42",
      "offset": 64
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 24
    },
    {
      "val": "80",
      "offset": 41
    },
    {
      "val": "5",
      "offset": 58
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "When customer buy one food, find the total price of bill that customer should had paid.",
  "description": "",
  "id": "check-bill-of-customers;when-customer-buy-one-food,-find-the-total-price-of-bill-that-customer-should-had-paid.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "customer buy food Hamburger with quantity 10",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the price of this bill is 245",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 18
    },
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "245",
      "offset": 26
    }
  ],
  "location": "ElectionStepdefs.the_price_of_this_bill_is(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 48300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "restaurant has new menu Spaghetti with price 50 with quantity 30",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "restaurant has new menu Hamburger with price 24.50 with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "restaurant has new menu ChickenFried with price 60 with quantity 18",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "restaurant has new menu FrenchFried with price 38 with quantity 42",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "restaurant has new menu Curry with price 80 with quantity 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Spaghetti",
      "offset": 24
    },
    {
      "val": "50",
      "offset": 45
    },
    {
      "val": "30",
      "offset": 62
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 535000,
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tMenu cannot be resolved to a type\n\tname cannot be resolved or is not a field\n\tprice cannot be resolved or is not a field\n\tquantity cannot be resolved or is not a field\n\tid cannot be resolved to a variable\n\tThe method getId() of type Food must override or implement a supertype method\n\tid cannot be resolved to a variable\n\tThe method getName() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tThe method getPrice() of type Food must override or implement a supertype method\n\tprice cannot be resolved to a variable\n\tThe method getQuantity() of type Food must override or implement a supertype method\n\tquantity cannot be resolved to a variable\n\tThe method soldUnit(int) of type Food must override or implement a supertype method\n\tquantity cannot be resolved or is not a field\n\tThe method toString() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tprice cannot be resolved to a variable\n\tquantity cannot be resolved to a variable\n\r\n\tat ku.restaurant.Food.\u003cinit\u003e(Food.java:3)\r\n\tat ku.restaurant.ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(ElectionStepdefs.java:29)\r\n\tat ✽.Given restaurant has new menu Spaghetti with price 50 with quantity 30(features/checkbill.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 24
    },
    {
      "val": "24.50",
      "offset": 45
    },
    {
      "val": "15",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 24
    },
    {
      "val": "60",
      "offset": 48
    },
    {
      "val": "18",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 24
    },
    {
      "val": "38",
      "offset": 47
    },
    {
      "val": "42",
      "offset": 64
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 24
    },
    {
      "val": "80",
      "offset": 41
    },
    {
      "val": "5",
      "offset": 58
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "When customer buy many foods, find the total price of bill that customer should had paid.",
  "description": "",
  "id": "check-bill-of-customers;when-customer-buy-many-foods,-find-the-total-price-of-bill-that-customer-should-had-paid.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "customer buy food Hamburger with quantity 5",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "customer buy food Curry with quantity 5",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the price of this bill is 522.5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 18
    },
    {
      "val": "5",
      "offset": 42
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 18
    },
    {
      "val": "5",
      "offset": 38
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "522.5",
      "offset": 26
    }
  ],
  "location": "ElectionStepdefs.the_price_of_this_bill_is(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 85600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "restaurant has new menu Spaghetti with price 50 with quantity 30",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "restaurant has new menu Hamburger with price 24.50 with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "restaurant has new menu ChickenFried with price 60 with quantity 18",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "restaurant has new menu FrenchFried with price 38 with quantity 42",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "restaurant has new menu Curry with price 80 with quantity 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Spaghetti",
      "offset": 24
    },
    {
      "val": "50",
      "offset": 45
    },
    {
      "val": "30",
      "offset": 62
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 695700,
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tMenu cannot be resolved to a type\n\tname cannot be resolved or is not a field\n\tprice cannot be resolved or is not a field\n\tquantity cannot be resolved or is not a field\n\tid cannot be resolved to a variable\n\tThe method getId() of type Food must override or implement a supertype method\n\tid cannot be resolved to a variable\n\tThe method getName() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tThe method getPrice() of type Food must override or implement a supertype method\n\tprice cannot be resolved to a variable\n\tThe method getQuantity() of type Food must override or implement a supertype method\n\tquantity cannot be resolved to a variable\n\tThe method soldUnit(int) of type Food must override or implement a supertype method\n\tquantity cannot be resolved or is not a field\n\tThe method toString() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tprice cannot be resolved to a variable\n\tquantity cannot be resolved to a variable\n\r\n\tat ku.restaurant.Food.\u003cinit\u003e(Food.java:3)\r\n\tat ku.restaurant.ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(ElectionStepdefs.java:29)\r\n\tat ✽.Given restaurant has new menu Spaghetti with price 50 with quantity 30(features/checkbill.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 24
    },
    {
      "val": "24.50",
      "offset": 45
    },
    {
      "val": "15",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 24
    },
    {
      "val": "60",
      "offset": 48
    },
    {
      "val": "18",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 24
    },
    {
      "val": "38",
      "offset": 47
    },
    {
      "val": "42",
      "offset": 64
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 24
    },
    {
      "val": "80",
      "offset": 41
    },
    {
      "val": "5",
      "offset": 58
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "When customer buy many foods and some orders are out of stocks, find the total price of bill that customer should had paid.",
  "description": "",
  "id": "check-bill-of-customers;when-customer-buy-many-foods-and-some-orders-are-out-of-stocks,-find-the-total-price-of-bill-that-customer-should-had-paid.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "customer buy food FrenchFried with quantity 5",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "customer buy food Hamburger with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "customer buy food Curry with quantity 10",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "customer buy food ChickenFried with quantity 30",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the price of this bill is 557.50",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 18
    },
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 18
    },
    {
      "val": "15",
      "offset": 42
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 18
    },
    {
      "val": "10",
      "offset": 38
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 18
    },
    {
      "val": "30",
      "offset": 45
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "557.50",
      "offset": 26
    }
  ],
  "location": "ElectionStepdefs.the_price_of_this_bill_is(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 208599,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "restaurant has new menu Spaghetti with price 50 with quantity 30",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "restaurant has new menu Hamburger with price 24.50 with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "restaurant has new menu ChickenFried with price 60 with quantity 18",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "restaurant has new menu FrenchFried with price 38 with quantity 42",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "restaurant has new menu Curry with price 80 with quantity 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Spaghetti",
      "offset": 24
    },
    {
      "val": "50",
      "offset": 45
    },
    {
      "val": "30",
      "offset": 62
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 545901,
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tMenu cannot be resolved to a type\n\tname cannot be resolved or is not a field\n\tprice cannot be resolved or is not a field\n\tquantity cannot be resolved or is not a field\n\tid cannot be resolved to a variable\n\tThe method getId() of type Food must override or implement a supertype method\n\tid cannot be resolved to a variable\n\tThe method getName() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tThe method getPrice() of type Food must override or implement a supertype method\n\tprice cannot be resolved to a variable\n\tThe method getQuantity() of type Food must override or implement a supertype method\n\tquantity cannot be resolved to a variable\n\tThe method soldUnit(int) of type Food must override or implement a supertype method\n\tquantity cannot be resolved or is not a field\n\tThe method toString() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tprice cannot be resolved to a variable\n\tquantity cannot be resolved to a variable\n\r\n\tat ku.restaurant.Food.\u003cinit\u003e(Food.java:3)\r\n\tat ku.restaurant.ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(ElectionStepdefs.java:29)\r\n\tat ✽.Given restaurant has new menu Spaghetti with price 50 with quantity 30(features/checkbill.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 24
    },
    {
      "val": "24.50",
      "offset": 45
    },
    {
      "val": "15",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 24
    },
    {
      "val": "60",
      "offset": 48
    },
    {
      "val": "18",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 24
    },
    {
      "val": "38",
      "offset": 47
    },
    {
      "val": "42",
      "offset": 64
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 24
    },
    {
      "val": "80",
      "offset": 41
    },
    {
      "val": "5",
      "offset": 58
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "When customer buy many foods and some orders are repeated, find the total price of bill that customer should had paid.",
  "description": "",
  "id": "check-bill-of-customers;when-customer-buy-many-foods-and-some-orders-are-repeated,-find-the-total-price-of-bill-that-customer-should-had-paid.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "customer buy food Hamburger with quantity 15",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "customer buy food Hamburger with quantity 5",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the price of this bill is 490",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 18
    },
    {
      "val": "15",
      "offset": 42
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 18
    },
    {
      "val": "5",
      "offset": 42
    }
  ],
  "location": "ElectionStepdefs.customer_buy_food_with_quantity(String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "490",
      "offset": 26
    }
  ],
  "location": "ElectionStepdefs.the_price_of_this_bill_is(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 130900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "restaurant has new menu Spaghetti with price 50 with quantity 30",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "restaurant has new menu Hamburger with price 24.50 with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "restaurant has new menu ChickenFried with price 60 with quantity 18",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "restaurant has new menu FrenchFried with price 38 with quantity 42",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "restaurant has new menu Curry with price 80 with quantity 5",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Spaghetti",
      "offset": 24
    },
    {
      "val": "50",
      "offset": 45
    },
    {
      "val": "30",
      "offset": 62
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 479200,
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tMenu cannot be resolved to a type\n\tname cannot be resolved or is not a field\n\tprice cannot be resolved or is not a field\n\tquantity cannot be resolved or is not a field\n\tid cannot be resolved to a variable\n\tThe method getId() of type Food must override or implement a supertype method\n\tid cannot be resolved to a variable\n\tThe method getName() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tThe method getPrice() of type Food must override or implement a supertype method\n\tprice cannot be resolved to a variable\n\tThe method getQuantity() of type Food must override or implement a supertype method\n\tquantity cannot be resolved to a variable\n\tThe method soldUnit(int) of type Food must override or implement a supertype method\n\tquantity cannot be resolved or is not a field\n\tThe method toString() of type Food must override or implement a supertype method\n\tname cannot be resolved to a variable\n\tprice cannot be resolved to a variable\n\tquantity cannot be resolved to a variable\n\r\n\tat ku.restaurant.Food.\u003cinit\u003e(Food.java:3)\r\n\tat ku.restaurant.ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(ElectionStepdefs.java:29)\r\n\tat ✽.Given restaurant has new menu Spaghetti with price 50 with quantity 30(features/checkbill.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 24
    },
    {
      "val": "24.50",
      "offset": 45
    },
    {
      "val": "15",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 24
    },
    {
      "val": "60",
      "offset": 48
    },
    {
      "val": "18",
      "offset": 65
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 24
    },
    {
      "val": "38",
      "offset": 47
    },
    {
      "val": "42",
      "offset": 64
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 24
    },
    {
      "val": "80",
      "offset": 41
    },
    {
      "val": "5",
      "offset": 58
    }
  ],
  "location": "ElectionStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "When customer not buy anything, find the total price of bill that customer should had paid.",
  "description": "",
  "id": "check-bill-of-customers;when-customer-not-buy-anything,-find-the-total-price-of-bill-that-customer-should-had-paid.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "the price of this bill is 0",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "ElectionStepdefs.the_price_of_this_bill_is(double)"
});
formatter.result({
  "status": "skipped"
});
});