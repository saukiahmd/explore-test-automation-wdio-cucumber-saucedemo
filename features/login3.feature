# Feature: Login functionality on SauceDemo 3  

#   @negative
#   Scenario: Login with empty username and empty password
#     Given I am on the SauceDemo login page
#     When I login using username "" and password ""
#     Then I should see an error message "Epic sadface: Username is required"

#   @negative
#   Scenario: Login with empty password only
#     Given I am on the SauceDemo login page
#     When I login using username "standard_user" and password ""
#     Then I should see an error message "Epic sadface: Password is required"

#   @negative
#   Scenario: Login with empty username only
#     Given I am on the SauceDemo login page
#     When I login using username "" and password "secret_sauce"
#     Then I should see an error message "Epic sadface: Username is required"