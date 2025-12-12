Feature: Product List Page Functionality on SauceDemo 1

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

@positive
Scenario: User menambahkan satu produk ke cart
    Given user berada di halaman Product List SauceDemo
    When user klik tombol Add to cart pada produk "Sauce Labs Backpack"
    Then tombol berubah menjadi Remove
    And badge cart menampilkan angka 1

@positive
Scenario: User menghapus produk dari cart
  Given user telah menambahkan "Sauce Labs Backpack" ke cart
  When user klik tombol Remove pada produk tersebut
  Then badge cart hilang atau menampilkan 0

@positive
Scenario: User menambahkan beberapa produk ke cart
    Given user berada di halaman Product List SauceDemo
    When user menambahkan produk berikut ke cart:
        | productName           |
        | Sauce Labs Bike Light |
        | Sauce Labs Bolt T-Shirt |
        | Sauce Labs Fleece Jacket |
    Then badge cart menampilkan angka 3