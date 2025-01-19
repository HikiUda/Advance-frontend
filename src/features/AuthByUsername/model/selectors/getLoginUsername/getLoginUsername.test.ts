import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    it('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'admin' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });
    it('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual(undefined);
    });
});
