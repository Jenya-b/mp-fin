import { Navigate, useLocation } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { useAppSelector } from 'hooks/redux';

interface RequireAdminProps {
  children: JSX.Element;
}

export const RequireAdmin = ({ children }: RequireAdminProps) => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.persistedUserReducer);
  const { analitics } = routerPath;

  if (!user || !user.isAdmin) return <Navigate to={analitics} state={{ from: location }} />;

  return children;
};
