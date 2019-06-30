import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import PropTypes from 'prop-types';

import ThemeContext from '../../context/ThemeContext';
import duotoneDark from 'prism-react-renderer/themes/duotoneDark';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

import { codeBlock } from './code-styles';

const Code = ( { codeString, language, ...props } ) => {
  const themeContext = React.useContext( ThemeContext );
  const codeTheme = themeContext.theme === 'dark' ? duotoneLight : duotoneDark;
  if ( props[ 'react-live' ] ) {
    return (
      <LiveProvider code={ codeString } noInline={ true }>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        { ...defaultProps }
        code={ codeString }
        language={ language }
        theme={ codeTheme }
      >
        { ( { className, style, tokens, getLineProps, getTokenProps } ) => (
          <pre className={ className } css={ codeBlock } style={ style }>
            { tokens.map((line, i) => (
              <div { ...getLineProps( { line, key: i } ) }>
                { line.map( ( token, key ) => (
                  <span { ...getTokenProps( { token, key } ) } />
                ) ) }
              </div>
            ) ) }
          </pre>
        ) }
      </Highlight>
    )
  }
};

Code.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  'react-live': PropTypes.bool,
};

Code.defaultProps = {
  'react-live': false,
};

export default React.memo(Code);
