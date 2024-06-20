import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18next/i18nextForTest';

export const TranslationDecorator = (StoryComponent: Story) => (
  <Suspense fallback=''>
    <I18nextProvider i18n={i18nForTests}>
      <StoryComponent />
    </I18nextProvider>
  </Suspense>
);
