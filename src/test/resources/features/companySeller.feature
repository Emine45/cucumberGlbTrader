@CompanySeller
Feature: US102 User should Seller Join Now page
  Scenario Outline: TC102 User should join as a seller
    Given user on the GlobalHomepage
    When user clicks seller Join Now Button
    And user clicks Company Seller
    When user enters Company Name "<Company_Name>"
    And user enters Company Mobile "<Company_Mobile>"
    And user enters Company Address "<Company_Address>"
    And user enters Name "<Name>"
    And user enters Email "<Email>"
    And user enters Sub Domain "<Sub_Domain>"
    And user enters Mobile Number "<Mobile_Number>"
    And user enters Country "<Country>"
    And user enters State "<State>"
    And user enters City "<City>"
    And user enters Address "<Address>"
    And user enters Postal Code "<Postal_Code>"
    And user enters Categories "<Categories>"
    And user enters Password "<Password>"
    Then user clicks Registration Button
    Examples:
      | Company_Name | Company_Mobile | Company_Address | Name  | Email              | Sub_Domain    | Mobile_Number | Country | State | City     | Address         | Postal_Code | Categories        | Password |
      | First        | 1234567890     | 123 Denton dr.  | Sofia | Sofia123@gmail.com | www.Sofia.com | 0987654321    | Orange  | CA    | San Jose | 255 Harward dr. | 7669438     | Computer & Office | 12345    |