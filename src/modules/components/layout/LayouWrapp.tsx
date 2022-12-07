import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useLazyGetBalanceQuery, useLazyGetUserQuery } from 'services';
import { Layout } from 'modules/components/Layout/Layout';

export const LayoutWrapp = () => {
  const dispatch = useAppDispatch();
  const [fetchUser] = useLazyGetUserQuery();
  const [fetchBalance] = useLazyGetBalanceQuery();
  const { isActiveUser } = useAppSelector((state) => state.persistedUserReducer);

  useEffect(() => {
    if (isActiveUser) {
      fetchUser(null);
      fetchBalance(null);
    }
  }, [dispatch, fetchBalance, fetchUser, isActiveUser]);

  return <Layout />;
};
