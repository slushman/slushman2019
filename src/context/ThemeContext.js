import React from 'react';

/**
 * https://github.com/m-muhsin/gatsby-dark-mode/blob/master/src/context/ThemeContext.js
 */

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext( defaultState );

// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true

const ThemeProvider = ( { children } ) => {
  const [ theme, setTheme ] = React.useState( 'light' );

  const toggleTheme = ( newTheme ) => {
    const oldTheme = newTheme === 'dark' ? 'light' : 'dark';
    setTheme( newTheme );
    document.body.classList.add( newTheme );
    document.body.classList.remove( oldTheme );
    localStorage.setItem( 'theme', newTheme );
  }
  
  React.useEffect( () => {
    const lsTheme = localStorage.getItem( 'theme' );
    if ( lsTheme ) {
      toggleTheme( lsTheme );
    } else if ( supportsDarkMode() ) {
      toggleTheme( 'dark' );
    }
  } );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;

export { ThemeProvider };
