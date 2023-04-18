import { ITheme } from 'interfaces/styled';
import { Colors } from 'constants/colors';

export const baseTheme: ITheme = {
  colors: {
    backgroundBase: Colors.MainBlue,
    backgroundPrimary: Colors.MainWhite,
    backgroundSecondary: Colors.MainGreenSecondary,
    backgroundTertiary: Colors.MainGreenPrimary,
    backgroundTelegramPrimary: Colors.AdditionalBlue,
    backgroundTelegramSecondary: Colors.AdditionalBlue,
    textBase: Colors.MainBlack,
    textPrimary: Colors.MainGreySecondary,
    textSecondary: Colors.MainGreyLight,
    textTertiary: Colors.MainGreyPrimary,
    textAttentionPrimary: Colors.MainBluePrimary,
    textAttentionSecondary: Colors.AdditionalPinkSecondary,
    borderPrimary: Colors.MainGreyLight,
    borderSecondary: Colors.MainGreenSecondary,
    borderTertiary: Colors.MainGreyTertiary,
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
  media: {
    extraLarge: '(max-width: 1279px)',
    large: '(max-width: 1023px)',
    medium: '(max-width: 767px)',
    small: '(max-width: 479px)',
  },
};
