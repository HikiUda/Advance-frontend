import { UserRole } from '../const/userRole';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserScheme {
    authData?: User;
    _inited: boolean;
}
