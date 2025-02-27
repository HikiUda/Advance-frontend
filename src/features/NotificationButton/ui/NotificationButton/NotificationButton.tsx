import { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Popover } from '@/shared/ui/Popups';
import { Icon } from '@/shared/ui/Icon';
import { NotificationList } from '@/entities/Notifications';
import BellSvg from '@/shared/assets/icon/bell.svg';

import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);
    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const btn = (
        <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
            <Icon Svg={BellSvg} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover trigger={btn}>
                    <NotificationList className={cls.notification} />
                </Popover>
            </BrowserView>
            <MobileView>
                {btn}

                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
};
