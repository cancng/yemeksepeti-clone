import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

export default extendTheme({
  breakpoints,
  fonts: {
    body: 'Open Sans, sans-serif',
    mono: 'Menlo, monospace',
  },

  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        minHeight: '100vh',
      },
    },
  },
  colors: {
    brand: {
      red100: '#ab0012',
      red200: '#ac000b',
      orange: '#ff7208',
      yellow: '#ffd55a',
    },
  },
  components: {
    Button: {
      baseStyle: { rounded: 'sm', _focus: { boxShadow: 'none' } },
    },
    Switch: {
      baseStyle: {
        track: {
          _focus: { boxShadow: 'none' },
        },
      },
    },
  },
});
