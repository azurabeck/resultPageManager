# ResultaPageManager Project
Material-Icon
react-bootstrap

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Usage Componentes

    1. index.js
         This is reponsible to render the website

    2. app.js
         Here we set the estrucuture to call both fullPage and loginPage.    

    3. Product.js
         Here we have our first element button. This will set the content on page according with product selected

    4. PageManager.js
         This is the main page of project, functions bellow.
              > Display all avaiable pages to set card
              > Select pages by country, and using filters
              > Select to edit some page
              > Select to download or preview cfg dor the correponding country

         4.1 PageEdit.js 
              This will edit the page selected 
      
    5. CardEditor.js
        This is where you can create a new card, to insert on the page before. 
            > Display all cards created
            > Click to add a new card
            > Filters avaibale
          
         5.1 CardEdit.js
              This will edit or add the card

    6. AccessControl.js
        This set permission to a new user

## Padronizing Code

    Components Name - file begins always with capital letters
    Style Name - file name is always in camel case
    Props elements - is alwaus on folder elements sample (single button, table)
    Components -  Folder component is  the place to keep a inteire page or estructure of project (side menu, header, or a page applyed on content)

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
