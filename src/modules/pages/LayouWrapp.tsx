import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useLazyGetUserQuery } from '../../services';
import { setUser } from '../../store/reducers/userSlice';
import { Layout } from './Layout';

export const LayoutWrapp = () => {
  const dispatch = useAppDispatch();
  const [fetchUser, { isSuccess, data }] = useLazyGetUserQuery();
  const { isActiveUser } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (isActiveUser) {
      fetchUser(null);
    }
  }, [isActiveUser]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data));
    }
  }, [isSuccess]);

  return <Layout />;
};
