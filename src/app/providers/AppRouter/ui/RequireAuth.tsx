import { getUserAuthData } from 'entities/User';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} replace state={{ from: location }} />;
  }
  // eslint-disable-next-line
  return <>{children}</>;
};
