import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useLazyGetUserQuery } from '../../../services';
import { setUser } from '../../../store/reducers/userSlice';
import { Layout } from './Layout';

export const LayoutWrapp = () => {
  const dispatch = useAppDispatch();
  const [fetchUser, { isSuccess, data }] = useLazyGetUserQuery();
  const { isActiveUser } = useAppSelector((state) => state.persistedUserReducer);

  useEffect(() => {
    if (isActiveUser) fetchUser(null);
    if (isSuccess && data) dispatch(setUser(data));
  }, [data, dispatch, fetchUser, isActiveUser, isSuccess]);

  return <Layout />;
};
