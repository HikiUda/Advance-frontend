/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slices/counterSlice';
import { useCouterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {}

export const Counter: FC<CounterProps> = () => {
    const counterValue = useCouterValue();
    const { increment, decrement, add } = useCounterActions();

    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };
    const handleAdd = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{`Value = ${counterValue}`}</h1>
            <Button data-testid="increment-btn" onClick={handleInc}>
                increment
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>
                decrement
            </Button>
            <Button data-testid="add-btn" onClick={handleAdd}>
                add
            </Button>
        </div>
    );
};
