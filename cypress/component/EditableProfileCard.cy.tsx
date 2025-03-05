import { EditableProfileCard } from '../../src/features/EditableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';

const ProfileId = '4';
describe('EditableProfileCard.cy.ts', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: ProfileId,
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id={ProfileId} />
            </TestProvider>,
        );
    });
});
