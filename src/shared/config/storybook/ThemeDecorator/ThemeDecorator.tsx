import { Decorator } from '@storybook/react';
import { Theme } from 'shared/lib/theme';

export const ThemeDecorator = (theme: Theme) => {
    document.body.className = `${theme}`;
    const decorator: Decorator = (Story) => <Story />;
    return decorator;
};
