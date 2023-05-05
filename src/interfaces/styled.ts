export interface ITheme {
  colors: {
    backgroundBase: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    backgroundTelegramPrimary: string;
    backgroundTelegramSecondary: string;
    textBase: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textAttentionPrimary: string;
    textAttentionSecondary: string;
    borderPrimary: string;
    borderSecondary: string;
    borderTertiary: string;
  };
  sizes: {
    loginForm: {
      width: number;
    };
    inputForm: {
      height: number;
    };
    logoForm: {
      width: number;
    };
    primaryBtn: {
      height: number;
    };
    sidebar: {
      widthActive: number;
      widthHidden: number;
      logo: { height: number };
    };
    header: {
      height: number;
    };
    footer: {
      height: number;
    };
    notFound: {
      title: { fontSize: number };
    };
    errorFallback: {
      title: { fontSize: number };
    };
    settingInputFile: {
      width: number;
      height: number;
    };
    replenishmentBlock: {
      height: number;
    };
    adminForm: {
      maxWidth: number;
      width: number;
    };
    telegramIcon: {
      width: number;
      height: number;
    };
  };
  indents: {
    loginForm: {
      paddingTop: number;
      paddingRight: number;
      paddingBottom: number;
      paddingLeft: number;
    };
    inputList: {
      marginTop: number;
      rowGap: number;
    };
    main: {
      paddingLeft: number;
      paddingLeftHide: number;
    };
    adminMenu: {
      paddingTop: number;
      paddingRight: number;
      paddingBottom: number;
      paddingLeft: number;
    };
    adminList: {
      rowGap: number;
    };
    adminContainer: {
      marginTop: number;
    };
    adminForm: {
      columnGap: number;
    };
    adminSubtitle: {
      marginBottom: number;
    };
    adminSearchBlock: {
      marginTop: number;
    };
    queryTableRow: {
      paddingTop: number;
      paddingBottom: number;
    };
  };
  borders: {
    loginForm: { borderRadius: number };
    inputForm: { borderRadius: number };
    primaryBtn: { borderRadius: number };
    replenishment: { borderRadius: number };
  };
  transitions: {
    input: { time: number };
    button: { time: number };
  };
  order: {
    header: number;
    sidebar: number;
    settingInputFile: number;
    settingLogo: number;
  };
  cursor: string;
  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
}
