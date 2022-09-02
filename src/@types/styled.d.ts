import 'styled-components'
import { defaultTheme } from '../styles/theme/defaultTheme'

type Themetype = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends Themetype { }
}