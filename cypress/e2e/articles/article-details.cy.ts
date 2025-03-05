let articleId = '';
describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login();
        cy.createArticle().then((article) => {
            articleId = article.id;
            cy.visit(`articles/${articleId}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(articleId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку статье', () => {
        cy.intercept('GET', '**articles/*', { fixture: 'artcile-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4);
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
