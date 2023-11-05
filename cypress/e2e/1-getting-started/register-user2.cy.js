describe('Register a user', () => {
    beforeEach(() => {
      // Visit the registration page
      cy.visit('https://www.automationexercise.com/login');
      cy.url().should('eq', 'https://www.automationexercise.com/login');
    });
  
    it('checking sign-up box and entering user data', () => {
      // Verify that we are on the correct page
      cy.url().should('include', 'https://www.automationexercise.com/login');
  
      // Check that the sign-up form elements are visible
      cy.get('.signup-form input:nth-child(2)').should('be.visible');
      cy.get('.signup-form input:nth-child(3)').should('be.visible');
  
      // Enter Name
      cy.get('.signup-form input:nth-child(2)').click().type('AjdinTester');
  
      // Enter Email
      cy.xpath("//input[@data-qa='signup-email']").click().type('ajdin_1995@live.com');
  
      // You can add more interactions as needed
  
      // Verify that the input fields contain the expected values
      cy.get('.signup-form input:nth-child(2)').should('have.value', 'AjdinTester');
      //cy.get('.signup-form input:nth-child(3)').should('have.value', 'ajdin_1995@live.com');
  
      // Submit the form (assuming you have a form submit action)
      // You may add form submission code here

      cy.xpath("//button[normalize-space()='Signup']").should('be.visible').click();


      // next page in line 

      cy.request({
        url: 'https://www.automationexercise.com/login', // Replace with your API URL
        method: 'GET',
      }).then((response) => {
        // Assert the response status code
        expect(response.status).to.eq(200);
  
        // Add more assertions or checks on the response data if needed
  
        // Check the URL after the API request
        cy.url().should('eq', 'https://www.automationexercise.com/signup');


        });

        //registrationForm complete output 

        //chooses the gender

        cy.xpath("//input[@id='id_gender1']").should('be.visible').click();


        //chooses the desired password 

        cy.xpath("//input[@id='password']").should('be.empty').click(setTimeout(() => {
            
        }, 1000))

        .type('Belkon12345!');


        });


        


    });

  