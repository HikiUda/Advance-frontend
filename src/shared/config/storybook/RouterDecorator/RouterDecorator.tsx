/* eslint-disable react/jsx-wrap-multilines */
import { Decorator } from '@storybook/react';
import { Suspense } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export function RouterDecorator(route?: string): Decorator {
    return (Story) => (
        <Routes>
            <Route
                path={route}
                element={
                    <Suspense fallback="...">
                        <Story />
                    </Suspense>
                }
            />
        </Routes>
    );
}

export function MemoryRouterDecorator(): Decorator {
    return (Story) => (
        <MemoryRouter initialEntries={['/path/1']}>
            <Story />
        </MemoryRouter>
    );
}
