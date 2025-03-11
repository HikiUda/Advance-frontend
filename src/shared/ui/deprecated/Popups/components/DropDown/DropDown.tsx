import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './DropDown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/const';

export interface DropDownItem {
    disabled?: boolean;
    content: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropDownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
    direction?: DropDownDirection;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const DropDown = (props: DropDownProps) => {
    const { className, items, trigger, direction = 'top left' } = props;

    return (
        <Menu as="div" className={classNames(cls.DropDown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirectionClass[direction]])}>
                {items.map((item, ind) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(
                                cls.item,
                                { [popupCls.active]: active, [popupCls.disabled]: item.disabled },
                                [],
                            )}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} key={ind} to={item.href}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} key={ind}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
