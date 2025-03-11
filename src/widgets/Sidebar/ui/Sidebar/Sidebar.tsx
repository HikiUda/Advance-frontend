import { memo, useState } from 'react';

import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ThemeSwitcher } from '@/shared/ui/deprecated/ThemeSwitcher';
import { LanguageSwitcher } from '@/shared/ui/deprecated/LanguageSwitcher';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/deprecated/Button';

import { VStack } from '@/shared/ui/deprecated/Stack';
import { getSidebaritems } from '../../model/selectors/getSidebaritems/getSidebaritems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ToggleFeatures } from '@/shared/lib/featureFlags';
import { AppLogo } from '@/shared/ui/AppLogo';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemsList = useSelector(getSidebaritems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(cls.SidebarRedesigned, { [cls.collapsed]: collapsed }, [
                        className,
                    ])}
                >
                    <AppLogo className={cls.appLogo} />
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
                >
                    <VStack role="navigation" className={cls.items}>
                        {SidebarItemsList.map((item) => (
                            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
                        ))}
                    </VStack>
                    <Button
                        data-testid="sidebar-toggle"
                        type="button"
                        onClick={onToggle}
                        className={cls.collapsedBtn}
                        theme={ThemeButton.BACKGROUND_INVERTED}
                        square
                        size={ButtonSize.L}
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <div className={cls.switcher}>
                        <ThemeSwitcher />
                        <LanguageSwitcher />
                    </div>
                </aside>
            }
        />
    );
});
