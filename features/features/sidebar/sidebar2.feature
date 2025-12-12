Feature: Sidebar Functionality on SauceDemo 2

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

Scenario: User menavigasi ke halaman All Items
    Given user berada di halaman manapun setelah login
    When user membuka sidebar
    And user klik menu All Items
    Then user diarahkan kembali ke halaman Product List

Scenario: User membuka halaman About dari sidebar
    Given user berada di halaman Product List SauceDemo
    When user membuka sidebar
    And user klik menu About
    Then user diarahkan ke halaman About (saucelabs.com)

Scenario: User melakukan Reset App State
    Given user sudah menambahkan produk ke cart
    When user membuka sidebar
    And memilih Reset App State
    Then seluruh produk kembali ke state awal
    And cart badge menghilang