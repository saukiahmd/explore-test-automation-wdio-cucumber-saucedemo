Feature: Login functionality on SauceDemo 1

  @positive
  Scenario Outline: Successful login with standard user
    Given I am on the SauceDemo login page
    When I login using username "<username>" and password "<password>"
    Then I should be redirected to the products page

    Examples:
      | username       | password      |
      | standard_user  | secret_sauce  |

  @negative
  Scenario: Login with locked out user
    Given I am on the SauceDemo login page
    When I login using username "locked_out_user" and password "secret_sauce"
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."

  @negative
  Scenario: Login with invalid password
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "wrong_password"
    Then I should see an error message "Epic sadface: Username and password do not match any user in this service"
