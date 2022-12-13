# E2E Test / JavaScript - Cypress

## Resume:
* This is an example of E2E Automation Testing with Cypress.

-----------------------  

To achieve this test framework, a test case on a [demo website page](https://katalon-demo-cura.herokuapp.com/profile.php#login) was created:

* Login to the main page through a POST request.

* Validate that an appointment was successfully scheduled where multiple actions are previously executed through the UI.
 
 
-----------------------  

* In order to automate the test case, the following classes and files were created:

  ***1. cy.js class***  where the test cases are implemented.

  ***2. .json file (fixture)***   where to save the test data to be used through the different UI actions.
  
  ***3. .cy class (commands)***   where the login via POST request is implemented.
  
  
  
------------------------
  
  ## Technologies used:

   - Language: JavaScript

* Enviroment Configuration:

  - Download and install Node.js

  - Run ```npm init```
  
  - Run ```npm install cypress --save-dev```
  
  - Run ```npm install -D cypress-xpath```

* Mochawesome Reports:

  - Run ```npm install --save-dev mochawesome ```
  
 * Run Tests:

   - Run ```npm run cy:run:chrome -- --reporter mochawesome --spec "cypress/e2e/MyTestE2E.cy.js"```
  
