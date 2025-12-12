Feature: Logout functionality on SauceDemo 1

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

Scenario: User melakukan logout
    When user membuka menu sidebar
    And memilih menu Logout
    Then user berhasil melakukan logout