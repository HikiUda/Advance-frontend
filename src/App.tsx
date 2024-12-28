import { Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/about'}>about</Link>
            <Link to={'/'}>main</Link>
            <Suspense fallback="Loading...">
                <Routes>
                    <Route
                        path={'/about'}
                        element={<AboutPageAsync />}
                    />
                    <Route
                        path={'/'}
                        element={<MainPageAsync />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};
