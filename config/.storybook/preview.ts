import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreProviderDecorator } from '../../src/shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
// import i18n from '../../src/shared/config/i18n/i18n'
// import {LanguageDecorator} from '../../src/shared/config/storybook/LanguageDecorator/LanguageDecorator'
import { Theme } from '../../src/shared/lib/theme/ThemeContext';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), StoreProviderDecorator({}), RouterDecorator],
};

export default preview;
