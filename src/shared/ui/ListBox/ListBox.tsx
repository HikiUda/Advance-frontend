import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom right': cls.bottomRight,
    'bottom left': cls.bottomLeft,
    'top right': cls.topRight,
    'top left': cls.topLeft,
};

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    label?: string;
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        items,
        label,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
    } = props;

    return (
        <HStack gap="4">
            {label && <span className={cls.label}>{`${label}>`}</span>}

            <Listbox
                as="div"
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button className={classNames(cls.trigger)}>
                    <Button className={classNames('', { [cls.disabled]: readonly })}>
                        {value || defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(cls.options, {}, [mapDirectionClass[direction]])}>
                    {items?.map((item) => (
                        <Listbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        { [cls.active]: active, [cls.disabled]: item.disabled },
                                        [],
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    );
};
