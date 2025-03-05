describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('И статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('И статьи успешно подгружаются', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('Полученин не существующего элемента', () => {
        cy.getByTestId('asdfads').should('exist');
    });
});
