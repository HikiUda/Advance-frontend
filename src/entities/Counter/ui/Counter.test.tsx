import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    it('Value title', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('Value = 10');
    });
    it('increment value', async () => {
        const user = userEvent.setup();
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        await user.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('Value = 11');
    });
    it('decrement value', async () => {
        const user = userEvent.setup();
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        await user.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('Value = 9');
    });
});
