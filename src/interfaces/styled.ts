export interface ITheme {
  colors: {
    background: string;
    sidebar: string;
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
    primaryBtn: string;
    primaryBtnbackground: string;
    primaryBtnHover: string;
    primaryBtnActive: string;
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
