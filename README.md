Grinfer automation tests

Install Visual studios code
Download https://code.visualstudio.com/

Install node.js
Download https://nodejs.org/en/download/

Terminal:

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
