import { FC, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/const';

interface PopoverProps {
    className?: string;
    children?: ReactNode;
    trigger: ReactNode;
    direction?: DropDownDirection;
}

export const Popover: FC<PopoverProps> = (props) => {
    const { className, children, trigger, direction = 'bottom left' } = props;

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
