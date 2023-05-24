import { MantineThemeColorsOverride, Tuple } from '@mantine/core'

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<'blue' | 'grey', Tuple<string, 7>>
  }
}

export const colorsTheme: MantineThemeColorsOverride = {
  colors: {
    blue: ['#FFFFFF', '#DEECFF', '#C9E0FF', '#B7D6FF', '#92C1FF', '#5E96FC', '#3B7CD3'],
    grey: ['#FFFFFF', '#F5F5F6', '#EAEBED', '#D5D6DC', '#ACADB9', '#7B7C88', '#232134'],
  },
}
