Feature: Get and Post http methods reqres

    Background: base url
        Given url baseUrl

    Scenario: single user
        Given path singleUserPath
        When method get
        Then status 200
        Then print response
        And match $ == {"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}

    Scenario: create user
        Given path createUserPath
        And request {"name": "morpheus","job": "leader"}
        When method post
        Then print response
        Then status 201
        And match response.name == "morpheus"
        And match response.job == "leader"