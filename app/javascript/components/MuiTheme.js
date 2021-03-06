// Theme

const primaryColor1= '#004664';
const primaryColor2= '#29aae2';

const primaryTextColor = '#fff';
const secondaryColor1= '#ade1f4';
const disabledTextColor= '#a7a9ac';
const accentColor= '#f1592a';
const secondaryColor4= '#d7df21';

export default {
  fontFamily: 'Robotolight, sans-serif',
  palette: {
    primary1Color: primaryColor2,
    primary2Color: primaryColor1,
    accent1Color: accentColor,
    accent2Color: secondaryColor4,
    accent3Color: accentColor,
    alternateTextColor: secondaryColor1,
    disabledColor: disabledTextColor,
  },

  flatButton: {
    textColor: primaryTextColor,
    primaryColor: primaryColor1,
    primaryColor1: primaryColor1,
    secondaryTextColor: secondaryColor1,
    disabledTextColor: disabledTextColor,
    secondaryColor: secondaryColor4
  },

  raisedButton: {
    textColor: primaryTextColor,
    primaryColor: primaryColor2,
    primaryColor1: accentColor,
    primaryTextColor: primaryTextColor,
    secondaryTextColor: secondaryColor4,
    disabledTextColor: disabledTextColor,
  },

  textField: {
    fontSize: '2vmax',
    textColor: primaryColor1,
    hintColor: disabledTextColor,
    floatingLabelColor: secondaryColor1,
    disabledTextColor: disabledTextColor,
    focusColor: accentColor,
    backgroundColor: 'transparent',
  },

  snackbar: {
    textColor: accentColor,
  }
};
