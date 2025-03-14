import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    it('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: '123' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    it('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    });
});
