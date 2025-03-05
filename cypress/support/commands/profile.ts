export const updateProfile = (first: string, last: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(first);
    cy.getByTestId('ProfileCard.lastname').clear().type(last);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};
export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'dddd' },
        body: {
            id: '4',
            first: 'testUser',
            lastname: 'user',
            age: 33,
            currency: 'RUB',
            country: 'Russia',
            city: 'Ircutsk',
            username: 'testUser',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    }).then((res) => res.body);
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(first: string, last: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
