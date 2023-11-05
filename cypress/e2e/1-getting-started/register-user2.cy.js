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

        // Get the dropdown element by its XPath ID
        // Get the day, month, and year dropdown elements
                    cy.xpath('//select[@id="days"]').select('5'); // Selects the 10th day
                    cy.xpath('//select[@id="months"]').select('9'); // Selects the 4th month (e.g., April)
                    cy.xpath('//select[@id="years"]').select('1995'); // Selects the year 1990

                    // Perform actions based on the selected options
                    cy.xpath('//select[@id="days"]').invoke('val').then((selectedDay) => {
                    cy.xpath('//select[@id="months"]').invoke('val').then((selectedMonth) => {
                        cy.xpath('//select[@id="years"]').invoke('val').then((selectedYear) => {
                        // Check the selected day, month, and year and perform actions based on these values
                        if (selectedDay === '5' && selectedMonth === '9' && selectedYear === '1995') {
                            // Specific actions for the selected date (e.g., 10th April 1990)
                            cy.log('Specific actions for the selected date...');
                        } else {
                            // Default actions if a different date is selected
                            cy.log('Default actions for a different date...');
                        }

                        // You can also add more general actions here that should be performed regardless of the selected date
                        // For example:
                        // cy.click('#common-button');

                            });
                        });
                    });


                    //checks the remaining fields to be entered 

                    cy.get('#newsletter').should('be.visible').click();

                    //another checkbox 

                    cy.xpath("//input[@id='optin']").should('be.visible').click();

                    //filling the rest of the form 

                    //first name 

                    cy.get('#first_name').should('be.empty')
                        .type('AjdinTest');

                    cy.get('#first_name').should('have.value', 'AjdinTest');


                    //lastname

                    cy.get('#last_name').should('be.empty').type('TesterBelko');
                    cy.get('#last_name').should('have.value' , 'TesterBelko');


                    // ggetting the rest of information 

                    cy.get('#company').should('be.empty').type('TestCompany');
                    cy.get('#company').should('have.value' , 'TestCompany');

                    //address

                    cy.get('#address1').should('be.empty').type('Sarajevo');
                    cy.get('#address1').should('have.value' , 'Sarajevo');

                    //getting the area you live 

                    // Get the "Country" dropdown element
                    cy.xpath("//select[@id='country']").select('Canada'); // Selects "Canada"

                    // Verify the selected country
                    cy.xpath('//select[@id="country"]').invoke('val').then((selectedCountry) => {
                    // Check the selected country and assert it
                    expect(selectedCountry).to.equal('Canada'); // Assert that "Canada" is selected


                    });

                    //filling the rest of the form 

                    cy.get('#state').should('be.empty').type('Toronto');
                    cy.get('#state').invoke('val').then((selectedCity) => {

                        expect(selectedCity).to.equal('Toronto');

                    });


                    //City is the same as capital 

                    cy.get('#city').should('be.empty').type('Toronto Capital');
                    cy.get('#city').invoke('val').then((selectedCity) => {

                        expect(selectedCity).to.equal('Toronto Capital');

                    });

                    //zipcode


                    cy.get('#zipcode').should('be.empty').type('12345');
                    cy.get('#zipcode').invoke('val').then((selectedCity) => {

                        expect(selectedCity).to.equal('12345');

                    });

                    // mobile number


                    cy.get('#mobile_number').should('be.empty').type('12345678');
                    cy.get('#mobile_number').invoke('val').then((selectedCity) => {

                        expect(selectedCity).to.equal('12345678');

                    });

                    //creating the account 

                
                    cy.xpath("//button[normalize-space()='Create Account']").should('be.visible').click();

                    //next page in line of registartion is 

                    cy.url().should('eq', 'https://www.automationexercise.com/account_created')
                    
                    cy.request('https://www.automationexercise.com/account_created')
                    .its('status')
                    .should('eq', 200);
              
                  // Check for specific text on the page
                  cy.contains('ACCOUNT CREATED!')
                    .should('be.visible');
                  
                  cy.contains('Congratulations! Your new account has been successfully created!')
                    .should('be.visible');
                  
                  cy.contains('You can now take advantage of member privileges to enhance your online shopping experience with us.')
                    .should('be.visible');



                    });


              });

    

  // account succesfully created and updated within the reponses and everything 

  