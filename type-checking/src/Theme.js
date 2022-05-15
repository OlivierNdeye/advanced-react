import { createContext } from 'react'

export const themes = {
    primary: {
      background:'tomato',
      color:'#efefef'
    },
    secondary: {
      background: 'efefef',
      color:'#000'
    }
}

export const ThemeContext = createContext()