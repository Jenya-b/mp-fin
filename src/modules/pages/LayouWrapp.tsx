import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { useLazyGetUserQuery } from '../../utils/api/userApi';
import { setUser } from '../../utils/store/reducers/userSlice';
import { Layout } from './Layout';

interface LayoutWrappProps {
  isActiveUser: string | null;
}

export const LayoutWrapp = ({ isActiveUser }: LayoutWrappProps) => {
  const dispatch = useAppDispatch();
  const [fetchUser, { isSuccess, data }] = useLazyGetUserQuery();

  useEffect(() => {
    if (isActiveUser) {
      fetchUser(null);
    }
  }, [isActiveUser]);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [isSuccess]);

  return <Layout />;
};
