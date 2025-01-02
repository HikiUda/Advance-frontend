import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'shared/lib/theme';
import DarkIcon from 'shared/assets/icon/theme-dark.svg';
import LightIcon from 'shared/assets/icon/theme-light.svg';
import { Theme } from 'shared/lib/theme';
import { Button, ThemeButton } from '../Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
