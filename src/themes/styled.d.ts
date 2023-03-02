import 'styled-components'
import dark from './dark'

// sobrescreve o tema padrão de cores para ficar global na aplicacao
declare module 'styled-components' {
  type ThemeType = typeof dark;
  export interface DefaultTheme extends ThemeType {}
}