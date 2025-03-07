import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../const/validateProfileError';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { first, lastname, age, city } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_USER_AGE);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_USER_CITY);
    }

    return errors;
};
