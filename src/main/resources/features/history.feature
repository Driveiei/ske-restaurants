Feature: History order of customer
    As an owner,
    I want to know the previously order.

Background:
    Given restaurant has new menu Spaghetti with price 50 with quantity 30
    And restaurant has new menu Hamburger with price 24.50 with quantity 15
    And restaurant has new menu ChickenFried with price 60 with quantity 18
    And restaurant has new menu FrenchFried with price 38 with quantity 42
    And restaurant has new menu Curry with price 80 with quantity 5

Scenario: When owner want to know the order before this order
    When first order buy food FrenchFried with quantity 4
    And first order buy food Hamburger with quantity 15
    When second order buy food Curry with quantity 3
    And second order buy food ChickenFried with quantity 2
    Then first order total bill is 519.5

Scenario: When owner want to know the order before of before this order
    When first order buy food FrenchFried with quantity 5
    And first order buy food Hamburger with quantity 15
    When second order buy food Curry with quantity 3
    And second order buy food ChickenFried with quantity 2
    When third order buy food Spaghetti with quantity 3
    And third order buy food FrenchFried with quantity 10
    Then first order total bill is 557.5



