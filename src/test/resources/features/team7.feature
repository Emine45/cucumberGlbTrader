@seller
Feature: US100 join in  page
  Scenario Outline: TC100 user should join now to page
    Given user on the homepage
    And user clicks join in button
    When user enters email "<email>"
    And user enters name "<name>"
    And user enters mobile "<mobile>"
    And user enters password "<password>"
    And user enters re_password "<re_password>"
    And user clicks Signup button

    Examples:
      | email              | name    | mobile     | password  | re_password |
      | yalc333123412@gmail.com  | mustafa | 6102023339 | tekir123  | tekir123   |
      | emily123123412@gmail.com | Emily   | 1234567890 | emily1234 | emily1234  |
      | nizam12123412@gmail.com  | nizam   | 122345567  | 786ertGHJ | 786ertGHJ  |
