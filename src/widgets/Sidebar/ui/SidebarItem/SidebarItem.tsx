import { t } from 'i18next';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { classnames } from 'shared/lib/classnames/classnames';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const {
    item: { Icon, path, text },
    className,
    collapsed,
  } = props;
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
