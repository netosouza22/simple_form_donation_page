import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { themeDefault } from '../src/styles/Theme';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]