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

        //webpage is visible 

        //Click on 'Signup / Login' button

      it('redirects you to the login page' , () => {

        cy.xpath("//a[normalize-space()='Signup / Login']").should('be.visible')
        .click();

        cy.url().should('eq' , 'https://www.automationexercise.com/login');
        cy.request({
            url: 'https://www.automationexercise.com/',
            method: 'GET',
        }).then((response) => {

            expect(response.status).to.eq(200);
        })

         });

         it('Adds the correct information and email and passowrd' , () => {

            
    
             });


      });
      
    });

  