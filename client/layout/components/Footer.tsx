import * as React from 'react';

import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;

class Footer extends React.Component {

  render() {
    return (
      <AntFooter style={{ textAlign: 'center' }}>
        Footer text
      </AntFooter>
    );
  }
}

export default Footer;
