import { BuildOptions } from '../types/config';
import { babelRemovePropsPlugin } from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderOptions extends BuildOptions {
    isTsx?: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: BuildBabelLoaderOptions) => ({
    test: isTsx ? /\.(jsx|tsx)/ : /\.(js|ts)/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: [
                ['@babel/plugin-transform-typescript', { isTsx }],
                '@babel/plugin-transform-runtime',
                !isDev &&
                    isTsx && [babelRemovePropsPlugin, { props: ['data-testid', 'data-selected'] }],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
