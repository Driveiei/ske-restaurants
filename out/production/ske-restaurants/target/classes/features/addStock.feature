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
