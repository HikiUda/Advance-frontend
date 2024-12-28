import { FC, useState } from 'react';

// import { classNames } from 'shared/lib/classnames/classNames';

import cls from './Counter.module.scss';

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
    const { className } = props;

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className={cls.button}>
            <h2>{count}</h2>
            <button onClick={increment}>increment</button>
        </div>
    );
};
