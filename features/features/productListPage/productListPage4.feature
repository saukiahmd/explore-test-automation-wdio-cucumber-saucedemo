Feature: Product List Page Functionality on SauceDemo 1

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

@positive  
Scenario: User membuka halaman detail produk
    Given user berada di halaman Product List SauceDemo
    When user klik nama produk "Sauce Labs Bike Light"
    Then user diarahkan ke halaman Product Detail untuk produk tersebut
