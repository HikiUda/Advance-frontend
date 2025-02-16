import { App } from 'app/App';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from './shared/lib/theme';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const containter = document.getElementById('root');
if (!containter) {
    throw new Error('you have no containter');
}
const root = createRoot(containter);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
