import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

// Component for testing ErrorBoundary
export const BugButton: FC = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    throw new Error();
  }, [error]);

  return <Button onClick={() => setError(true)}>{t('Throw error')}</Button>;
};
