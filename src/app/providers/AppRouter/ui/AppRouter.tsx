import { RequireAuth } from 'app/providers/AppRouter/ui/RequireAuth';
import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import {
  AppRoutesProps,
  routeConfig,
} from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback(
    ({ element, authOnly, path }: AppRoutesProps) => {
      const el = <div className='page-wrapper'>{element}</div>;

      return (
        <Route
          key={path}
          element={authOnly ? <RequireAuth>{el}</RequireAuth> : el}
          path={path}
        />
      );
    },
    []
  );

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
});
