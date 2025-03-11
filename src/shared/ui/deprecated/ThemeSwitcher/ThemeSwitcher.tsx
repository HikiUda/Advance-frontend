import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { useTheme } from '@/shared/lib/theme';
import ThemeIcon from '@/shared/assets/icon/theme-dark.svg';
import { Button, ThemeButton } from '../Button/Button';
// eslint-disable-next-line fsd-layer-import/layer-import
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon } from '../Icon';

interface ThemeSwitcherProps {
    className?: string;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
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
            <Icon Svg={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
});
