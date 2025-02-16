import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    it('get validateErrors', () => {
        const state: DeepPartial<StateSchema> = { profile: { validateError: [] } };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
    it('get not validateErrors', () => {
        const state: DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
