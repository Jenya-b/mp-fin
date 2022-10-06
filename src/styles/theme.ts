import { ITheme } from '../interfaces/styled';
import {
  colorMainBlack,
  colorMainBlue,
  colorMainBluePrimary,
  colorMainGreenPrimary,
  colorMainGreenSecondary,
  colorMainGreyLight,
  colorMainGreyPrimary,
  colorMainGreySecondary,
  colorMainGreyTertiary,
  colorMainWhite,
  colorAdditionalBlue,
  colorAdditionalGreen,
  colorAdditionalOrange,
  colorAdditionalPinkPrimary,
  colorAdditionalPinkSecondary,
} from '../constants/colors';

export const baseTheme: ITheme = {
  colors: {
    background: colorMainBlue,
    sidebar: colorMainGreenPrimary,

    footer: colorMainWhite,
    headerMessageCount: colorMainGreenSecondary,

    //formLogin
    formBackground: colorMainWhite,
    inputFormPlaceholder: colorMainGreyTertiary,
    inputFormHoverBord: colorMainGreenSecondary,
    inputFormFocusBord: colorMainGreyTertiary,
    inputFormText: colorMainGreyPrimary,
    inputFormBackground: colorMainBlue,
    inputFormBorder: colorMainGreyLight,
    titleForm: colorMainBlack,
    formLink: colorMainGreenPrimary,
    formLinkHover: colorMainGreenSecondary,
    formSpan: colorMainGreySecondary,

    //button
    btn: colorMainGreyLight,
    btnbackground: colorMainGreenSecondary,
    btnHover: colorMainGreenPrimary,
    btnActive: colorMainGreenPrimary,
    btnCircleHeader: colorMainGreyLight,

    //header
    header: colorMainWhite,
    headerBorder: colorMainGreyLight,
    textHeaderPrimary: colorMainBlack,
    textCountHeader: colorMainWhite,
  },
  sizes: {
    loginForm: {
      width: 390,
    },
    inputForm: {
      height: 55,
    },
    logoForm: {
      width: 590,
    },
    primaryBtn: {
      height: 55,
    },
    sidebar: {
      widthActive: 290,
      widthHidden: 90,
    },
    header: {
      height: 80,
    },
    footer: {
      height: 80,
    },
  },
  indents: {
    loginForm: {
      paddingTop: 39,
      paddingRight: 45,
      paddingBottom: 39,
      paddingLeft: 45,
    },
    inputList: {
      marginTop: 25,
      rowGap: 15,
    },
    main: {
      paddingLeft: 290,
      paddingLeftHide: 90,
    },
  },
  borders: {
    loginForm: { borderRadius: 10 },
    inputForm: { borderRadius: 10 },
    primaryBtn: { borderRadius: 10 },
  },
  transitions: {
    input: { time: 0.3 },
    button: { time: 0.3 },
  },
};
