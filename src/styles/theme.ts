import { ITheme } from 'interfaces/styled';
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
} from 'constants/colors';

export const baseTheme: ITheme = {
  colors: {
    background: colorMainBlue,

    //sidebar
    sidebar: colorMainGreenPrimary,
    sidebarLogo: colorMainGreenSecondary,
    sidebarTextMenu: colorMainWhite,

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
    messageError: colorAdditionalPinkSecondary,

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
    headerMessageCount: colorMainGreenSecondary,

    //footer
    footerBg: colorMainWhite,
    footerBorder: colorMainGreyLight,
    textFooterPrimary: colorMainBlack,

    //not-found
    notFoundBg: colorMainWhite,

    //main
    mainTitle: colorMainGreyPrimary,

    //settings
    inputSettingsFormBg: colorMainWhite,
    labelSettingsFormText: colorMainGreySecondary,

    //table
    tableReportDate: colorMainBluePrimary,
    tableReportTextMain: colorMainGreyPrimary,
    tableReportSubtitleColl: colorMainGreySecondary,

    //
    tablePrimeCostWrapper: colorMainWhite,

    //replenishment
    replenishmentBg: colorMainWhite,
    replenishmentSpan: colorMainBlack,
    replenishmentBalance: colorMainGreyPrimary,
    replenishmentWriteOff: colorMainGreySecondary,
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
      logo: { height: 80 },
    },
    header: {
      height: 80,
    },
    footer: {
      height: 60,
    },
    notFoundBg: {
      title: { fontSize: 56 },
    },
    settingInputFile: {
      width: 178,
      height: 178,
    },
    replenishmentBlock: {
      height: 239,
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
    replenishment: { borderRadius: 10 },
  },
  transitions: {
    input: { time: 0.3 },
    button: { time: 0.3 },
  },
  // z-index
  order: {
    sidebar: 50,
    settingInputFile: 10,
    settingLogo: 1,
  },
  cursor: 'pointer',
};
