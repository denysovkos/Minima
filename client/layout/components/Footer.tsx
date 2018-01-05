import * as React from 'react';

import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;

class Footer extends React.Component {

  render() {
    return (
      <AntFooter style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()}, Kostintyn Denysov, All rights reserved
      </AntFooter>
    );
  }
}

export default Footer;
