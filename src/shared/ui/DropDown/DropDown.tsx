import { FC, Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import cls from './DropDown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropDownItem {
    disabled?: boolean;
    content: ReactNode;
    onClick?: () => void;
    href?: string;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom right': cls.bottomRight,
    'bottom left': cls.bottomLeft,
    'top right': cls.topRight,
    'top left': cls.topLeft,
};

interface DropDownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}

export const DropDown = (props: DropDownProps) => {
    const { className, items, trigger, direction = 'top left' } = props;

    return (
        <Menu
            as="div"
            className={classNames(cls.DropDown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
                {items.map((item, ind) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                key={ind}
                                to={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            as={Fragment}
                            key={ind}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
