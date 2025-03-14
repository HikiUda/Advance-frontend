import { memo } from 'react';

import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const AppLink = memo((props: AppLinkProps) => {
    const { className, theme = AppLinkTheme.PRIMARY, to, children, ...otherProps } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
