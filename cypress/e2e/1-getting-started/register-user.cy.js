/// <reference types="cypress" />

// test automation exercies for the github project 

describe('example to-do app', () => {
    beforeEach(() => {
      // visit the first website of the projectt
      cy.visit('https://www.automationexercise.com/');
      cy.url().should('eq', 'https://www.automationexercise.com/');

    });


    describe('Visit and Check Response Data', () => {
        it('Visits the website and checks response data', () => {
          cy.request({
            url: 'https://www.automationexercise.com/',
            method: 'GET',
            headers: {
              'Referrer-Policy': 'strict-origin-when-cross-origin',
            },
          }).then((response) => {
            // Assert the response status code and URL in a single .then() block
            expect(response.status).to.eq(200);
      
            // You can add more assertions or checks as needed
          });
        });
      });
      
  
    it.only('First task of register a user', () => {


            // Get the current URL before clicking
            let currentUrl;
            cy.url().then((url) => {
            currentUrl = url;
            });

            cy.xpath("//i[@class='fa fa-lock']")
                .should('be.visible')
        
            //check if the login is visible on frontsinde

            cy.xpath("//i[@class='fa fa-lock']")
                .click();


                cy.url().should('not.eq', currentUrl);

                cy.url().should('eq' , 'https://www.automationexercise.com/login');
            
        
            });


        
        })

  