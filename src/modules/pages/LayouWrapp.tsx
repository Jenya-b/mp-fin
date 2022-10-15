import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useLazyGetUserQuery } from '../../utils/api/userApi';
import { setUser } from '../../utils/store/reducers/userSlice';
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
    if (data) {
      dispatch(setUser(data));
    }
  }, [isSuccess]);

  return <Layout />;
};
