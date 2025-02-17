/* eslint-disable react/jsx-wrap-multilines */
import { FC, useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DropDown } from 'shared/ui/DropDown/DropDown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    title={t('wendsew App')}
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                />
                <AppLink
                    to={`${RoutePath.article_details}new`}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <DropDown
                    className={cls.dropdown}
                    direction="bottom left"
                    items={[
                        ...(isAdminPanelAvailable ? [{ content: t('Админ'), href: RoutePath.admin }] : []),
                        { content: t('Профиль'), href: RoutePath.profile + authData.id },
                        { content: t('Выйти'), onClick: onLogout },
                    ]}
                    trigger={
                        <Avatar
                            size={30}
                            src={authData.avatar}
                        />
                    }
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
            </div>
        </header>
    );
};
