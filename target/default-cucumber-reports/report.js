$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/seller.feature");
formatter.feature({
  "name": "US101 user should join seller page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC101 user should join as a seller",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks seller join now button",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks agent seller button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters name1 \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters email1 \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters sub domain \"\u003csubdomain\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters mobile1 \"\u003cmobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters  state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters postalcode \"\u003cpostalcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters furniture \"\u003cfurniture\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password1 \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks registiration",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "subdomain",
        "mobile",
        "country",
        "state",
        "city",
        "address",
        "postalcode",
        "furniture",
        "password"
      ]
    },
    {
      "cells": [
        "emily",
        "emily@gmail.com",
        "www.emilyArlington.com",
        "94858383992",
        "USA",
        "TX",
        "Dallas",
        "187 galveston rd",
        "54321",
        "Furniture",
        "1234567"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC101 user should join as a seller",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks seller join now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_clicks_seller_join_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks agent seller button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_clicks_agent_seller_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters name1 \"emily\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_name1(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email1 \"emily@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_email1(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters sub domain \"www.emilyArlington.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_sub_domain(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters mobile1 \"94858383992\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_mobile1(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters country \"USA\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_country(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters  state \"TX\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_state(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters city \"Dallas\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_city(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address \"187 galveston rd\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters postalcode \"54321\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_postalcode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters furniture \"Furniture\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_furniture(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password1 \"1234567\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_enters_password1(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks registiration",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SellerStepDefinations.user_clicks_registiration()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/team7.feature");
formatter.feature({
  "name": "US100 join in  page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC100 user should join now to page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks join in button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters email \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enters name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters mobile \"\u003cmobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user enters re_password \"\u003cre_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks Signup button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "name",
        "mobile",
        "password",
        "re_password"
      ]
    },
    {
      "cells": [
        "yalc333123412@gmail.com",
        "mustafa",
        "6102023339",
        "tekir123",
        "tekir123"
      ]
    },
    {
      "cells": [
        "emily123123412@gmail.com",
        "Emily",
        "1234567890",
        "emily1234",
        "emily1234"
      ]
    },
    {
      "cells": [
        "nizam12123412@gmail.com",
        "nizam",
        "122345567",
        "786ertGHJ",
        "786ertGHJ"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC100 user should join now to page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks join in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_clicks_join_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email \"yalc333123412@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters name \"mustafa\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters mobile \"6102023339\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_mobile(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"tekir123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters re_password \"tekir123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_re_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Signup button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_clicks_Signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC100 user should join now to page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks join in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_clicks_join_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email \"emily123123412@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters name \"Emily\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters mobile \"1234567890\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_mobile(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"emily1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters re_password \"emily1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_re_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Signup button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_clicks_Signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC100 user should join now to page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@seller"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks join in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_clicks_join_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email \"nizam12123412@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters name \"nizam\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters mobile \"122345567\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_mobile(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"786ertGHJ\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters re_password \"786ertGHJ\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_enters_re_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Signup button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TeamStepDefinitions.user_clicks_Signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});