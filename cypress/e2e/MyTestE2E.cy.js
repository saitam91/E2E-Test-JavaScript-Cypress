describe('E2E Testing Demo Page',()=> {

        before(function(){
            cy.demoLogin()
            cy.fixture('appointment').then(function(data){
                this.data=data
            })
        })

        it('Validate Appointment', function(){
            cy.get('#btn-make-appointment').click()
            cy.get('#combo_facility').select(this.data.facility)
            cy.get('#chk_hospotal_readmission').check()
            cy.get('#txt_visit_date').type(this.data.visitDate)
            cy.get('#radio_program_medicaid').check({force: true})
            cy.get('#txt_comment').type(this.data.comment)
            cy.get('#btn-book-appointment').click()
            cy.get('h2').should('have.text','Appointment Confirmation')
        })
    })




        
        
        
        
        
       

    
        
        



    
   

    

