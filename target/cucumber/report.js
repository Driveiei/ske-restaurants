$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/history.feature");
formatter.feature({
  "line": 1,
  "name": "History order of customer",
  "description": "  As an owner,\r\n  I want to know the previously order.",
  "id": "history-order-of-customer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 206300,
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 209074500,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 272300,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 220800,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 245600,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 222500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "When owner want to know the order before this order",
  "description": "",
  "id": "history-order-of-customer;when-owner-want-to-know-the-order-before-this-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "first order buy food FrenchFried with quantity 4",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "first order buy food Hamburger with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "second order buy food Curry with quantity 3",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "second order buy food ChickenFried with quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "first order total bill is 519.5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 21
    },
    {
      "val": "4",
      "offset": 47
    }
  ],
  "location": "RestaurantStepdefs.first_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 267700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 21
    },
    {
      "val": "15",
      "offset": 45
    }
  ],
  "location": "RestaurantStepdefs.first_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 167800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 22
    },
    {
      "val": "3",
      "offset": 42
    }
  ],
  "location": "RestaurantStepdefs.second_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 154199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 49
    }
  ],
  "location": "RestaurantStepdefs.second_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 207999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "519.5",
      "offset": 26
    }
  ],
  "location": "RestaurantStepdefs.first_order_total_bill_is(double)"
});
formatter.result({
  "duration": 6019500,
  "status": "passed"
});
formatter.before({
  "duration": 66399,
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 198000,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 305399,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 260901,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 283100,
  "status": "passed"
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
  "location": "RestaurantStepdefs.restaurant_has_new_menu_with_price_with_quantity(String,double,int)"
});
formatter.result({
  "duration": 292199,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "When owner want to know the order before of before this order",
  "description": "",
  "id": "history-order-of-customer;when-owner-want-to-know-the-order-before-of-before-this-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "first order buy food FrenchFried with quantity 5",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "first order buy food Hamburger with quantity 15",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "second order buy food Curry with quantity 3",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "second order buy food ChickenFried with quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "third order buy food Spaghetti with quantity 3",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "third order buy food FrenchFried with quantity 10",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "first order total bill is 557.5",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 21
    },
    {
      "val": "5",
      "offset": 47
    }
  ],
  "location": "RestaurantStepdefs.first_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 155399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hamburger",
      "offset": 21
    },
    {
      "val": "15",
      "offset": 45
    }
  ],
  "location": "RestaurantStepdefs.first_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 241500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Curry",
      "offset": 22
    },
    {
      "val": "3",
      "offset": 42
    }
  ],
  "location": "RestaurantStepdefs.second_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 136400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChickenFried",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 49
    }
  ],
  "location": "RestaurantStepdefs.second_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 98700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spaghetti",
      "offset": 21
    },
    {
      "val": "3",
      "offset": 45
    }
  ],
  "location": "RestaurantStepdefs.third_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 174400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FrenchFried",
      "offset": 21
    },
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "RestaurantStepdefs.third_order_buy_food_with_quantity(String,int)"
});
formatter.result({
  "duration": 224800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "557.5",
      "offset": 26
    }
  ],
  "location": "RestaurantStepdefs.first_order_total_bill_is(double)"
});
formatter.result({
  "duration": 143000,
  "status": "passed"
});
});