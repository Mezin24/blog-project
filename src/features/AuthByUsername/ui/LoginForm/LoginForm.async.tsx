import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((res) =>
      setTimeout(() => {
        // @ts-ignore
        res(import('./LoginForm'));
      }, 1000)
    )
);
