Feature: Get call reqres

  Background: base url
    Given url 'https://reqres.in/api'
Scenario: single user
Given path '/users/2'
When method get
Then status 200
And match $ == {"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}