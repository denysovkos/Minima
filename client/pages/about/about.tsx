import * as React from 'react';
import styled from 'react-emotion';
class AboutPage extends React.Component {
  render() {
    const ContentWrapper = styled('div')`
      background: #fff;
      padding: 24px;
      min-height: 380px;
      padding-top: 70px;
    `;

    return (
      <ContentWrapper>
        Some information & help docs will be here ... but i don`t know when
      </ContentWrapper>
    );
  }
}

export default AboutPage;