/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slices/counterSlice';

interface CounterProps {}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{`Value = ${counterValue}`}</h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                increment
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    );
};
