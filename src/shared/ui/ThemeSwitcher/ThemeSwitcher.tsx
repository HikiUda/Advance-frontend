import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { useTheme, Theme } from '@/shared/lib/theme';
import DarkIcon from '@/shared/assets/icon/theme-dark.svg';
import LightIcon from '@/shared/assets/icon/theme-light.svg';
import { Button, ThemeButton } from '../Button/Button';
// eslint-disable-next-line fsd-layer-import/layer-import
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleTheme = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onToggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
