Feature: CC TC

  Scenario Outline: Verify signup and login functionalities
    Given I signup with <username>, <email> and <password>
    
    Examples:
      | username | email       | password  |
      | testuser | qwe@asd.com | qweasdzxc |