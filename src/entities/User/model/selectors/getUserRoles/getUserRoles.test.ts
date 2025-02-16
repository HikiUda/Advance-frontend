import { StateSchema } from 'app/providers/StoreProvider';
import { getUserRoles, isUserAdmin } from './getUserRoles';
import { UserRole } from '../../const/userRole';

describe('getUserRoles', () => {
    it('isAdmin ', () => {
        const state: DeepPartial<StateSchema> = { user: { authData: { roles: [UserRole.ADMIN] } } };
        expect(getUserRoles(state as StateSchema)).toEqual([UserRole.ADMIN]);
        expect(isUserAdmin(state as StateSchema)).toEqual(true);
    });
    it('get not ', () => {
        const state: DeepPartial<StateSchema> = { user: { authData: { roles: undefined } } };
        expect(getUserRoles(state as StateSchema)).toBe(undefined);
    });
});
