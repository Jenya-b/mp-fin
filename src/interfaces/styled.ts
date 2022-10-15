export interface ITheme {
  colors: {
    background: string;
    sidebar: string;
    sidebarLogo: string;
    sidebarTextMenu: string;
    header: string;
    headerBorder: string;
    formBackground: string;
    inputFormPlaceholder: string;
    inputFormHoverBord: string;
    inputFormFocusBord: string;
    inputFormText: string;
    inputFormBackground: string;
    inputFormBorder: string;
    formLink: string;
    formLinkHover: string;
    formSpan: string;
    titleForm: string;
    btn: string;
    btnbackground: string;
    btnHover: string;
    btnActive: string;
    btnCircleHeader: string;
    headerMessageCount: string;
    textCountHeader: string;
    textHeaderPrimary: string;
    footerBg: string;
    footerBorder: string;
    textFooterPrimary: string;
    notFoundBg: string;
    messageError: string;
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
    notFoundBg: {
      title: { fontSize: number };
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
  };
  borders: {
    loginForm: { borderRadius: number };
    inputForm: { borderRadius: number };
    primaryBtn: { borderRadius: number };
  };
  transitions: {
    input: { time: number };
    button: { time: number };
  };
}
