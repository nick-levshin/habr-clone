import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
      data-testid="sidebar"
    >
      <Button
        onClick={() => setCollapsed(prev => !prev)}
        data-testid="sidebar-toggle"
        className={styles.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.links}>
        <AppLink
          to={RoutePath.main}
          className={styles.link}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.label}>{t('Main')}</span>
        </AppLink>
        <AppLink
          to={RoutePath.about}
          className={styles.link}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.label}>{t('About')}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
