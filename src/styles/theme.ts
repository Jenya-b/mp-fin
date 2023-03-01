import { ITheme } from 'interfaces/styled';
import { Colors } from 'constants/colors';

export const baseTheme: ITheme = {
  colors: {
    background: Colors.MainBlue,

    //sidebar
    sidebar: Colors.MainGreenPrimary,
    sidebarLogo: Colors.MainGreenSecondary,
    sidebarTextMenu: Colors.MainWhite,

    //formLogin
    formBackground: Colors.MainWhite,
    inputFormPlaceholder: Colors.MainGreyTertiary,
    inputFormHoverBord: Colors.MainGreenSecondary,
    inputFormFocusBord: Colors.MainGreyTertiary,
    inputFormText: Colors.MainGreyPrimary,
    inputFormBackground: Colors.MainBlue,
    inputFormBorder: Colors.MainGreyLight,
    titleForm: Colors.MainBlack,
    formLink: Colors.MainGreenPrimary,
    formLinkHover: Colors.MainGreenSecondary,
    formSpan: Colors.MainGreySecondary,
    messageError: Colors.AdditionalPinkSecondary,

    //button
    btn: Colors.MainGreyLight,
    btnbackground: Colors.MainGreenSecondary,
    btnbackgroundTelegram: Colors.AdditionalBlue,
    btnHover: Colors.MainGreenPrimary,
    btnHoverTelegram: Colors.AdditionalBlueDark,
    btnActive: Colors.MainGreenPrimary,
    btnCircleHeader: Colors.MainGreyLight,

    //header
    header: Colors.MainWhite,
    headerBorder: Colors.MainGreyLight,
    textHeaderPrimary: Colors.MainBlack,
    textCountHeader: Colors.MainWhite,
    headerMessageCount: Colors.MainGreenSecondary,

    //footer
    footerBg: Colors.MainWhite,
    footerBorder: Colors.MainGreyLight,
    textFooterPrimary: Colors.MainBlack,

    //not-found
    notFoundBg: Colors.MainWhite,

    //main
    mainTitle: Colors.MainGreyPrimary,

    //settings
    inputSettingsFormBg: Colors.MainWhite,
    labelSettingsFormText: Colors.MainGreySecondary,

    //table
    tableReportDate: Colors.MainBluePrimary,
    tableReportTextMain: Colors.MainGreyPrimary,
    tableReportSubtitleColl: Colors.MainGreySecondary,

    //
    tablePrimeCostWrapper: Colors.MainWhite,

    //replenishment
    replenishmentBg: Colors.MainWhite,
    replenishmentSpan: Colors.MainBlack,
    replenishmentBalance: Colors.MainGreyPrimary,
    replenishmentWriteOff: Colors.MainGreySecondary,

    //admin-panel
    adminMenuBg: Colors.MainGreyLight,
    adminMenuLink: Colors.MainBlack,
    adminMenuLinkActive: Colors.MainBluePrimary,
    adminInputFile: Colors.MainWhite,

    //searchQuery
    tableGridBg: Colors.MainWhite,
    borderTable: Colors.MainGreyLight,
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
    notFound: {
      title: { fontSize: 56 },
    },
    errorFallback: {
      title: { fontSize: 56 },
    },
    settingInputFile: {
      width: 178,
      height: 178,
    },
    replenishmentBlock: {
      height: 239,
    },
    adminForm: {
      maxWidth: 900,
      width: 100,
    },
    telegramIcon: {
      width: 25,
      height: 25,
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
    adminMenu: {
      paddingTop: 40,
      paddingRight: 25,
      paddingBottom: 40,
      paddingLeft: 30,
    },
    adminList: {
      rowGap: 10,
    },
    adminContainer: {
      marginTop: 30,
    },
    adminForm: {
      columnGap: 10,
    },
    adminSubtitle: {
      marginBottom: 10,
    },
    adminSearchBlock: {
      marginTop: 30,
    },
    queryTableRow: {
      paddingTop: 7,
      paddingBottom: 7,
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
