describe('FastAPI App', () => {
    it('requests the root and checks the response', () => {
        cy.request('/').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.equal({ Hello: "World" })
        })
    })

    it('requests an item page', () => {
        cy.request('/items/42?q=test').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.equal({ item_id: 42, q: "test" })
        })
    })
})
