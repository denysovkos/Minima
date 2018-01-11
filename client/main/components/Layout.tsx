import * as React from 'react';
import { Header, Content, Footer } from '../../layout';
import SideBarMenu from '../../pages/components/sidebar-menu/menu';
import styled from 'react-emotion';

class Layout extends React.Component<any, any> {

    render() {
        const {logOut, auth, location, init, profile} = this.props;

        const LayOutWrapper = styled('div')`
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-between;
        `;

        return (
           <LayOutWrapper>
            <Header location={location} logOut={logOut} auth={auth} profile={profile} />
            {/dashboard/.test(location.pathname) &&
            <SideBarMenu location={location.pathname} />
          }
            <Content>
                {this.props.children}
            </Content>
            <Footer />
           </LayOutWrapper>
        );
    }
}

export default Layout;

