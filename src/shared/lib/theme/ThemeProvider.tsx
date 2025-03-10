import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
// eslint-disable-next-line fsd-layer-import/layer-import
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const { theme: defaultTheme } = useJsonSettings();
    const [theme, setTheme] = useState(initialTheme || defaultTheme || Theme.LIGHT);
    const [isThemeInited, setIsThemeInited] = useState(false);
    document.body.className = theme;

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
