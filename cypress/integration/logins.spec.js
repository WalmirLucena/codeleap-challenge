import { getUser } from "../../src/actions";

describe("Verifica a tela de Login", ()=> {
    it("Renderiza Corretamente", () => {
        cy.visit("/");
        cy.get(".login-form").should("exist");
    })

    it("Verifica se o input está presente e o botão desibilitado", () => {
        cy.visit("/");
        cy.get("input").should("exist");
        cy.get(".submit-button-grey").should("be.disabled")
    })

    it("Verifica se ao digitar no INPUT e clicar em ENTER redireciona para home", ()=>{
        cy.visit("/");
        cy.get('.input-name').type('Walmir').should('have.value', 'Walmir');
        cy.get(".submit-button").click();
        cy.location('pathname').should('include', 'home')
})
})

describe("Verifica a tela home", () => {
    beforeEach(function() {
        cy
        .window()
        .its('store')
        .invoke('dispatch', getUser("Walmir"));
     });
        

    
    it("Renderiza corretamente", () => {
        cy.visit("/home");
        cy.get(".main-home").should("exist");
    })
    it("Se Possui dois input e um botão desabilitado", () => {
        
        cy.visit("/home");
        cy.get(".title").should("exist");
        cy.get(".content").should("exist");
        cy.get(".button-create-grey").should("be.disabled")
    })
    it("Verifica se ao digitar nos INPUTs e clicar em CREATE adiciona posts", ()=>{
        cy.visit("/");
        cy.get('.input-name').type('Walmir').should('have.value', 'Walmir');
        cy.get(".submit-button").click();
        cy.get('.title').type('Lorem Ipsum').should('have.value', 'Lorem Ipsum');
        cy.get('.content').type('Lorem Ipsum Lorem Ipsum').should('have.value', 'Lorem Ipsum Lorem Ipsum');
        cy.get(".button-create").click();
        cy.get('.post-section').should("exist");
    })
    

    it("Verifica se os posts possuem o TITLE e CONTENT inseridos", ()=> {
        cy.visit("/home");
        cy.get('.title').type('Lorem Ipsum').should('have.value', 'Lorem Ipsum');
        cy.get('.content').type('Lorem Ipsum Lorem Ipsum').should('have.value', 'Lorem Ipsum Lorem Ipsum');
        cy.get(".button-create").click();
        cy.get('.post-section').should("exist");
        cy.get('.item-title').should("have.text", 'Lorem Ipsum');
        cy.get('.item-content').should("have.text", 'Lorem Ipsum Lorem Ipsum');

    })
})