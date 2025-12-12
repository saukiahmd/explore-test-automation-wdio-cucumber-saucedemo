Feature: Sidebar Functionality on SauceDemo 1

  Background: 
    Given I am on the SauceDemo login page
    When I login using username "standard_user" and password "secret_sauce"

Scenario: User membuka sidebar
    Given user berada di halaman Product List SauceDemo
    When user klik tombol burger menu
    Then sidebar muncul di sisi kiri layar

Scenario: User menutup sidebar menggunakan tombol close
    Given sidebar sedang terbuka
    When user klik tombol close (X)
    Then sidebar tertutup

Scenario: User menutup sidebar dengan mengklik area luar sidebar
    Given sidebar sedang terbuka
    When user klik area di luar sidebar
    Then sidebar tertutup