import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../const/validateProfileError';

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateError?: ValidateProfileError[];
}
