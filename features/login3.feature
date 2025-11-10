# Feature: Login functionality on SauceDemo 3  

#   @negative
#   Scenario: Login with empty username only
#     Given I am on the SauceDemo login page
#     When I login using username "" and password "secret_sauce"
#     Then I should see an error message "Epic sadface: Username is required"