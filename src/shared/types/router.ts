import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line fsd-layer-import/layer-import
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
