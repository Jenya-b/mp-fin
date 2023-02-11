import { useEffect, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useIsInSystemUserQuery } from 'services';
import { setIsActiveUser } from 'store/reducers/userSlice';
import GlobalStyles from 'styles/global';
import { baseTheme } from 'styles/theme';
import { Loader } from 'modules/components/Loader/Loader';
import { router } from 'modules/components/Router/Router';
import { useAppDispatch } from 'store/store';

export const App = () => {
  const dispatch = useAppDispatch();
  const { isSuccess } = useIsInSystemUserQuery(null);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setIsActiveUser(true));
    }
  }, [dispatch, isSuccess]);

  return (
    <ThemeProvider theme={baseTheme}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  );
};
