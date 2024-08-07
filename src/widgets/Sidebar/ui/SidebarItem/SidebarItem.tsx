import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebarItem';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    item: { Icon, path, text, authOnly },
    className,
    collapsed,
  } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && authOnly) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={classnames(cls.item, { [cls.collapsed]: collapsed }, [
        className,
      ])}
      to={path}
    >
      <Icon className={cls.icon} />
      <span className={cls.link}>{t(text)}</span>
    </AppLink>
  );
});
