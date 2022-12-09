Cypress.Commands.add('demoLogin',()=>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    cy.request({
        method:'POST',
        url:'/authenticate.php',
        form:true,
        body:{
            username:'John Doe',
            password:'ThisIsNotAPassword'
        }
    })  
    cy.get('#btn-login').click()
})



    

