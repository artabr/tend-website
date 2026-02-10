import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="navbar bg-slate-850 container">
      <div className="navbar-start">
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="https://docs.tend-app.pro/en">
          {t('docs')}
        </NavigationLink>
      </div>
      <div className="navbar-end">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
