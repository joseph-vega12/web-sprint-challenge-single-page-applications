describe("Pizza App", () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const textInput = () => cy.get('input[name="name"]')

    it('the proper elements exist', () => {
        textInput().should('exist')
        textInput().type("Joseph Vega")
    })

})