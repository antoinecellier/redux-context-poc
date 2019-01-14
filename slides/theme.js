import React from 'react';
import {dark} from 'mdx-deck/themes';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

class Provider extends React.Component {
  render() {
    const {children, mode, index, length, update} = this.props;

    if (mode !== 'NORMAL') {
      return <React.Fragment>{children}</React.Fragment>;
    }

    return (
      <React.Fragment>
        {children}
        <div
          style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <span>
            {index + 1}/{length}
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default {
  ...dark,
  Provider,
  codeSurfer: {
    ...nightOwl,
  },
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
