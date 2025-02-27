import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../const/validateProfileError';

const data = {
    first: 'Тимур',
    lastname: 'Ульби',
    age: 33,
    currency: Currency.USD,
    country: Country.Kazahstan,
    city: 'Moscowff',
    username: 'admin',
    avatar: '',
};

describe('validateProfileData', () => {
    it('not errors', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    it('incorrect firstname', () => {
        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    it('incorrect lastname', () => {
        const result = validateProfileData({ ...data, lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    it('incorrect age', () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_AGE]);
    });
    it('incorrect city', () => {
        const result = validateProfileData({ ...data, city: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_CITY]);
    });
    it('not data', () => {
        const result = validateProfileData();

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});
