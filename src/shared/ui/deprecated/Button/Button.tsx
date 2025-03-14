import { ButtonHTMLAttributes, memo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
/*
 * Component is deprecated. Find new in redisigned folder
 * @deprecated
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        size = ButtonSize.M,
        square,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
