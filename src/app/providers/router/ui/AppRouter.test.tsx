import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    it('Страница должна отобразиться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    it('Несуществующая страница', async () => {
        componentRender(<AppRouter />, {
            route: '/asdfasdf',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
    it('Редирект для неавторизованого пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile(1),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    it('Доступ к закрытой страница для авторизованого пользователя', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile(1),
            initialState: {
                user: { _inited: true, authData: {} },
                profile: {},
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    it('Запрет доступа для пользователей не обладающих расширеными правами', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.USER] } },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    it('Доступ к закрытой страница для admin', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
