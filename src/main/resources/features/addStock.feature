Feature: Manage stock in the restaurant
    As an owner,
    I want to manage any menu in the restaurant.

Background:
    Given owner add food Spaghetti with price 50 with quantity 30
    And owner add food Hamburger with price 20 with quantity 15

Scenario: When owner want to find any food in restaurant and he founded.
    When owner want to find Spaghetti
    Then he found Spaghetti

Scenario: When owner want to find any food in restaurant and he not founded.
     When owner want to find Cucumber
     Then he not found Cucumber

Scenario: When customer order the food, owner will distract out of stock.
     When owner distract Hamburger with quantity 10
     Then the stock has 5 Hamburger left

Scenario: When the food is out of stock, owner will remove the food out of restaurant.
     When owner remove Spaghetti
     Then restaurant have none of Spaghetti
