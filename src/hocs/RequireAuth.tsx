import { Navigate, useLocation } from 'react-router-dom';
import { routerPath } from 'constants/routerPath';
import { useAppSelector } from 'hooks/redux';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const { isActiveUser } = useAppSelector((state) => state.persistedUserReducer);
  const { login } = routerPath;

  if (!isActiveUser) {
    localStorage.removeItem('hashMd5');
    return <Navigate to={login} state={{ from: location }} />;
  }

  return children;
};
