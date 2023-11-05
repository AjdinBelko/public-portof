
describe('Register a user', () => {
    beforeEach(() => {
      // visit the first website of the project
      cy.visit('https://www.automationexercise.com/login');
      cy.url().should('eq', 'https://www.automationexercise.com/login');
    });
  
    it('Visits the website and checks response data', () => {
      cy.request({
        url: 'https://www.automationexercise.com/login',
        method: 'GET',
        headers: {
          'Referrer-Policy': 'same-origin',
        },
      }).then((response) => {
        // Assert the response status code
        expect(response.status).to.eq(200);
  
        // Add more assertions or checks on the response data if needed
  
        // Now, you can perform additional actions on the page, like visiting or interacting with elements
        cy.visit('https://www.automationexercise.com/some-other-page'); // Example: Visiting another page
  
        // Add more assertions or interactions on the new page if required
      });
    });
  
    it('checking sign up box', () => {
      
        cy.xpath("//section[@id='form']//div[@class='col-sm-4']")
            .should('be.visible');
        
        cy.xpath("//h2[normalize-space()='New User Signup!']")
            .should('have.text' , 'New User Signup!');

            //boxcleared


     });


     it('checking sign up box', () => {
      
       //sending the request for registartion 

       //first input field of 

       cy.xpath("//input[@placeholder='Name']").should('be.empty')
        .type('ajdin');


     });


  });
  