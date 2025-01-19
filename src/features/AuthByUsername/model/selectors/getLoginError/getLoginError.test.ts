import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: 'error' },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    it('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
