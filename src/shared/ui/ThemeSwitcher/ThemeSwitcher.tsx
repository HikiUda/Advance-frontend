import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { useTheme, Theme } from '@/shared/lib/theme';
import DarkIcon from '@/shared/assets/icon/theme-dark.svg';
import LightIcon from '@/shared/assets/icon/theme-light.svg';
import { Button, ThemeButton } from '../Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
