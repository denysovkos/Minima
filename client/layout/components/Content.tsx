import * as React from 'react';
import styled from 'react-emotion';
import { Layout } from 'antd';
const { Content: AntContent } = Layout;

class Content extends React.Component {

  render() {
    const ContentWrapper = styled('div')`
      background: #fff;
      padding: 24px;
      min-height: 380px;
    `;
    
    return (
      <AntContent style={{ padding: '0 10px' }}>
      <ContentWrapper>
        {this.props.children}
      </ContentWrapper>
    </AntContent>
    );
  }
}

export default Content;
