import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store';
import { useLazyGetUserQuery } from 'services';
import { Layout } from 'modules/components/Layout/Layout';

export const LayoutWrapp = () => {
  const dispatch = useAppDispatch();
  const [fetchUser] = useLazyGetUserQuery();
  const { isActiveUser } = useAppSelector((state) => state.persistedUserReducer);

  useEffect(() => {
    if (isActiveUser) {
      fetchUser(null);
    }
  }, [dispatch, fetchUser, isActiveUser]);

  return <Layout />;
};
