import { ChangeEvent, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: T;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: T;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;
    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option
                key={opt.value}
                value={opt.value}
                className={cls.option}
            >
                {opt.content}
            </option>
        )),
        [options],
    );
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };
    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                value={value}
                disabled={readonly}
                className={cls.select}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
