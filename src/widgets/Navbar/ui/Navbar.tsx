/* eslint-disable react/jsx-wrap-multilines */
import { FC, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Button, ThemeButton } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { getRouteArtilceDetailsCreate } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropDown } from '@/features/AvatarDropDown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text title={t('wendsew App')} theme={TextTheme.INVERTED} className={cls.appName} />
                <AppLink to={getRouteArtilceDetailsCreate()} className={cls.createBtn}>
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropDown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onShowModal}>
                    {t('Войти')}
                </Button>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
            </div>
        </header>
    );
};
