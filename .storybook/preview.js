import { ThemeProvider, createTheme } from '@mui/material/styles';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme1, theme2 } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const providerFn = ({ theme, children }) => {
  const muTheme = createTheme(theme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

//colors에 커스텀하게 들어갈 수 있도록 하는 부분
addDecorator(withThemes(null, [theme1, theme2], { providerFn }));

export const decorators = [muiTheme([theme1, theme2])];
