import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteMain,
    getRouteAbout,
    getRouteProfile,
    getRouteArticle,
} from '@/shared/const/router';
import AboutIcon from '@/shared/assets/icon/about.svg';
import MainIcon from '@/shared/assets/icon/main.svg';
import ProfileIcon from '@/shared/assets/icon/profile.svg';
import ArticleIcon from '@/shared/assets/icon/article.svg';
import { SidebarItemType } from '../../types/SidebarItem';

export const getSidebaritems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О нас',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        SidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticle(),
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }
    return SidebarItemsList;
});
