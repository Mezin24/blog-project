import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebarItem';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: SidebarItemType[] = [
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
    sidebarItems.push(
      {
        path: `${RoutePath.profile}${userData.id}`,
        text: 'Профаил',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItems;
});
