import { Navigate, useLocation } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { useAppSelector } from 'store/store';

interface RequireAdminProps {
  children: JSX.Element;
}

export const RequireAdmin = ({ children }: RequireAdminProps) => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.persistedUserReducer);
  const { home } = routerPath;

  if (!user || !user.isAdmin) return <Navigate to={home} state={{ from: location }} />;

  return children;
};
