Feature: Check bill of customers
    As a customer,
    I want to know the total price of bill that I should had paid.

Background:
    Given restaurant has new menu Spaghetti with price 50 with quantity 30
    And restaurant has new menu Hamburger with price 24.50 with quantity 15
    And restaurant has new menu ChickenFried with price 60 with quantity 18
    And restaurant has new menu FrenchFried with price 38 with quantity 42
    And restaurant has new menu Curry with price 80 with quantity 5

Scenario: When customer buy one food, find the total price of bill that customer should had paid.
    When customer buy food Hamburger with quantity 10
    Then the price of this bill is 245

Scenario: When customer buy many foods, find the total price of bill that customer should had paid.
    When customer buy food Hamburger with quantity 10
    And customer buy food Curry with quantity 5
    Then the price of this bill is 645

Scenario: When customer buy many foods and some orders are out of stocks, find the total price of bill that customer should had paid.
    When customer buy food FrenchFried with quantity 5
    And customer buy food Hamburger with quantity 15
    And customer buy food Curry with quantity 10
    And customer buy food ChickenFried with quantity 30
    Then the price of this bill is 557.50

Scenario: When customer buy many foods and some orders are repeated, find the total price of bill that customer should had paid.
    When customer buy food Hamburger with quantity 15
    And customer buy food Hamburger with quantity 5
    Then the price of this bill is 367.5

Scenario: When customer not buy anything, find the total price of bill that customer should had paid.
    Then the price of this bill is 0
