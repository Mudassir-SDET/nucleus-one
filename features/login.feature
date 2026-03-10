Feature: Login functionality

Scenario: Successful login
  Given I open the login page
  When I login with valid credentials
  Then I should see dashboard


Scenario: Login with wrong email
  Given I open the login page
  When I login with wrong email
  Then I should see login failed message


Scenario: Login with wrong password
  Given I open the login page
  When I login with wrong password
  Then I should see login failed message