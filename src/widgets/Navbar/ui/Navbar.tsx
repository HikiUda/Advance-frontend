import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}
                >
                    about
                </AppLink>
                <AppLink to={'/'}>main</AppLink>
            </div>
        </div>
    );
};
