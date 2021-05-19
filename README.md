Grinfer automation tests

Install Visual studios code
Download https://code.visualstudio.com/

Install node.js
Download https://nodejs.org/en/download/

npm init -y

npm install cypress --save-dev

npx cypress open

Generation random data:

npm install chance --save-dev

File upload:

npm install --save-dev cypress-file-upload

Run all tests headless:

npx cypress run --record --key efe088a6-b860-441a-b48f-24aa1fe1174a

Run all tests in Chrome:

npx cypress run --headless --browser chrome --record --key ae3dafc4-eb7c-4639-8160-bafa09d07fd5

It will install all components based on package.json file into node_modules folder.

### Running of auto-tests locally

#### 1 To run all tests in Electron:
If you not interested in seeing GUI
> npx cypress run

#### 2 To run all tests in Chrome:
If you prefer to see the GUI while test running
> npx cypress run -b chrome

#### 3 In order to get the report in the Cypress Dashboard you should add some more parameters:
> npx cypress run --record --key 8f967a09-48ee-4128-91ad-b8fe98216d80

#### 4 Run single test file
Choose single test in cypress window
> npx cypress open
