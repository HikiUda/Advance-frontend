import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { MemoryRouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { StoreProviderDecorator } from '../../src/shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
// import i18n from '../../src/shared/config/i18n/i18n'
// import {LanguageDecorator} from '../../src/shared/config/storybook/LanguageDecorator/LanguageDecorator'
import { Theme } from '../../src/shared/lib/theme/ThemeContext';

initialize();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    loaders: [mswLoader],
    decorators: [
        StyleDecorator,
        ThemeDecorator(),
        StoreProviderDecorator({}),
        MemoryRouterDecorator(),
    ],
};

export default preview;
