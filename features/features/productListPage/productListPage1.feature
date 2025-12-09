Feature: Product List Page Functionality on SauceDemo 1

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

@positive
Scenario: Verification of product list display
    Then I should see a list of products displayed

@positive
Scenario: Verification of sorting products from A to Z
    When I sort products by "Name (A to Z)"
    Then I should see products sorted from A to Z

@positive
Scenario: Verification of sorting products from Z to A
    When I sort products by "Name (Z to A)"
    Then I should see products sorted from Z to A