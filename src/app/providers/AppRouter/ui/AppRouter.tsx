import { RequireAuth } from 'app/providers/AppRouter/ui/RequireAuth';
import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback(
    ({ element, authOnly, path }: AppRoutesProps) => (
      <Route
        key={path}
        element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        path={path}
      />
    ),
    []
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});
