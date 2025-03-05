import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('empty spec', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Редирект на главную для неавторизованого', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход на несуществующую страницу', () => {
            cy.visit('/gfsfdfs');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('testUser', '123');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Переход на страницу статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlePage')).should('exist');
        });
    });
});
