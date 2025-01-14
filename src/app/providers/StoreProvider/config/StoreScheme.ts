import { CounterSchema } from 'entities/Counter/';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
    loginForm?: LoginScheme;
}
