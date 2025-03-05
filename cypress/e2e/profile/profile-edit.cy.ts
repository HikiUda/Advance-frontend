let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${profileId}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'testUser');
    });
    it('И редактирует его', () => {
        const newFirst = 'newFirstname';
        const newLast = 'newLastname';
        cy.updateProfile(newFirst, newLast);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirst);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLast);
    });
});
