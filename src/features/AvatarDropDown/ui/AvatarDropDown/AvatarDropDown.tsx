import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DropDown } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AvatarDropDownProps {
    className?: string;
}

export const AvatarDropDown: FC<AvatarDropDownProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const avatar = <Avatar fallbackInverted size={30} src={authData.avatar} />;

    return (
        <DropDown
            className={className}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{ content: t('Админ'), href: getRouteAdmin() }] : []),
                { content: t('Профиль'), href: getRouteProfile(authData.id) },
                { content: t('Выйти'), onClick: onLogout },
            ]}
            trigger={avatar}
        />
    );
};
