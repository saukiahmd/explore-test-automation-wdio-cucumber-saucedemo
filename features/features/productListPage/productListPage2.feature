Feature: Product List Page Functionality on SauceDemo 1

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

@positive
Scenario: verification sorting products by price low to high
    When I sort products by "Price (low to high)"
    Then I should see products sorted from low to high price

@positive
Scenario: verification sorting products by price high to low
    When I sort products by "Price (high to low)"
    Then I should see products sorted from high to low price
