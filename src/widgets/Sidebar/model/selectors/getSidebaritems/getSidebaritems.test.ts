import { StateSchema } from 'app/providers/StoreProvider';
import { getSidebaritems } from './getSidebaritems';

describe('getSidebaritems', () => {
    it('auth', () => {
        const state: DeepPartial<StateSchema> = { user: { authData: { id: '1' } } };
        expect(getSidebaritems(state as StateSchema)).toHaveLength(4);
    });
    it('auth', () => {
        const state: DeepPartial<StateSchema> = { user: { authData: { id: '1' } } };
        expect(getSidebaritems(state as StateSchema).find((n) => n.text === 'Профиль')).toHaveProperty(
            'path',
            '/profile/1',
        );
    });
    it('not Auth', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getSidebaritems(state as StateSchema)).toHaveLength(2);
    });
});
