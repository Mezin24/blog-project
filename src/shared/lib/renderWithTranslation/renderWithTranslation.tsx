import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18nextForTest from 'shared/config/i18next/i18nextForTest';

export const renderWithTranslation = (component: ReactNode) =>
  render(<I18nextProvider i18n={i18nextForTest}>{component}</I18nextProvider>);
