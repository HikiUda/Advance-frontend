import { ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Theme } from '@/shared/lib/theme';

// export const ThemeDecorator = (theme: Theme) => {
//     document.body.className = `${theme}`;
//     const decorator: Decorator = (Story) => <Story />;
//     return decorator;
// };

export const ThemeDecorator = () => withThemeByClassName<ReactRenderer>({
    themes: {
        light: Theme.LIGHT,
        dark: Theme.DARK,
        orange: Theme.ORANGE,
    },
    defaultTheme: 'light',
    parentSelector: 'body',
});
