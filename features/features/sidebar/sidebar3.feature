Feature: Sidebar Functionality on SauceDemo 3

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

Scenario: User melakukan Reset App State
    Given user sudah menambahkan produk ke cart
    When user membuka sidebar
    And memilih Reset App State
    Then seluruh produk kembali ke state awal
    And cart badge menghilang
