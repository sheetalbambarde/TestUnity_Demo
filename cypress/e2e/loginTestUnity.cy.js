//<reference types= "cypress"/>
//<reference types= "cypress-xpath"/>

describe('login', ()=> {
   beforeEach(()=>{
      cy.visit('https://demo.guru99.com/insurance/v1/index.php')

   })

// it('Register new user', function(){
//     cy.visit('https://demo.guru99.com/insurance/v1/index.php') 
//     cy.get('a.btn').click()
//     //cy.get('#user_title')
//     cy.get('#user_firstname').type('Sheetal')
//     cy.get('#user_surname').type('Bambarde')
   
// })

 it('invalid login', function(){
    //cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get(':nth-child(1) > label').should('have.text','Email')
     cy.get('#email').type('sheetal@gmail.com')
    cy.get('#password').type('123')
    cy.get(':nth-child(3) > .btn').click() 
    cy.get('span > b').should('have.text','Enter your Email address and password correct')

   })
   
it('login Successfully and request quotation', function(){
    //cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    var username= cy.get('#email').type('sheetalbambarde@gmail.com')
    var Password=cy.get('#password').type('sheetal@123')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('#ui-id-2')
    .should('have.text','Request Quotation')
    .click()
    cy.get('#new_quotation > .actions > .btn-success').click()
    cy.visit('https://demo.guru99.com/insurance/v1/header.php')
    cy.wait(2000)
   
   })

   it('Profile and Edit Profile',()=>{
      var username= cy.get('#email').type('sheetalbambarde@gmail.com')
    var Password=cy.get('#password').type('sheetal@123')
    cy.get(':nth-child(3) > .btn').click()
      cy.get('#ui-id-4').should('have.text','Profile').click()
      cy.get('#ui-id-5').should('have.text', 'Edit Profile').click()
      cy.get('h1').should('have.text','Editing user profile')


   })
// it('Retrieve Quotation', function(){

//      //need to recheck
//       cy.get('#email').type('sheetalbambarde@gmail.com')
//       cy.get('#password').type('sheetal@123')
//       cy.get(':nth-child(3) > .btn').click()
//       cy.get('#ui-id-3').should('have.text','Retrieve Quotation').click()
//       cy.get('form > [type="text"]').type('10022')   //invalid identification number
//       cy.get('#getquote').click()
//       cy.get('body > :nth-child(5)').should('have.text','Wrong Retrieve Quotation ID. Please Check...')
//       cy.get('form > [type="text"]').type(ID)   //correct identification number
//       cy.get('#getquote').click()
//       cy.get('font').should('have.text','Retrieve Quotation')


//    })

   
})

