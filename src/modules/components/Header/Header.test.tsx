import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from 'styles/theme';
import { Header } from './Header';
import {
  StyledHeader,
  BalanceButton,
  BalanceIcon,
  BalanceInfo,
  BalanceSum,
  ButtonLogin,
  ButtonSettings,
  ButtonWrapper,
  Controls,
  LoginImage,
  LoginInfo,
  LoginName,
  LoginTitle,
} from './Header.styled';

describe('Snapshot Header styled-components', () => {
  test('StyledHeader', () => {
    const tree = renderer.create(<StyledHeader theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('BalanceButton', () => {
    const tree = renderer.create(<BalanceButton theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('BalanceIcon', () => {
    const tree = renderer.create(<BalanceIcon theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('BalanceInfo', () => {
    const tree = renderer.create(<BalanceInfo theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('BalanceSum', () => {
    const tree = renderer.create(<BalanceSum theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ButtonLogin', () => {
    const tree = renderer.create(<ButtonLogin theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ButtonSettings', () => {
    const tree = renderer.create(<ButtonSettings theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('ButtonWrapper', () => {
    const tree = renderer.create(<ButtonWrapper theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Controls', () => {
    const tree = renderer.create(<Controls theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('LoginImage', () => {
    const tree = renderer
      .create(<LoginImage imagesUrl={'/source/images/iconAccount.png'} theme={baseTheme} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('LoginInfo', () => {
    const tree = renderer.create(<LoginInfo theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('LoginName', () => {
    const tree = renderer.create(<LoginName theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('LoginTitle', () => {
    const tree = renderer.create(<LoginTitle theme={baseTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
