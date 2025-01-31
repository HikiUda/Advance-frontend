import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icon/about.svg';
import MainIcon from 'shared/assets/icon/main.svg';
import ProfileIcon from 'shared/assets/icon/profile.svg';
import ArticleIcon from 'shared/assets/icon/article.svg';
import { SidebarItemType } from '../../types/SidebarItem';

export const getSidebaritems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'О нас',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        SidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }
    return SidebarItemsList;
});
