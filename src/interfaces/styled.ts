export interface ITheme {
  colors: {
    [key: string]: string;
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
    sidebar: number;
    settingInputFile: number;
    settingLogo: number;
  };
  cursor: string;
}
