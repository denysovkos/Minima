import * as React from 'react';
import { Header, Content, Footer } from '../../layout';
import 'antd/dist/antd.css';

import { Layout as AntLayout } from 'antd';
const { Content: AntContent } = AntLayout;

class Layout extends React.Component<any, any> {
    render() {
        const {logOut, auth, location} = this.props;
        return (
            <AntLayout>
                <Header location={location} logOut={logOut} auth={auth} />
                <Content>
                    {this.props.children}
                </Content>
                <Footer />
            </AntLayout>
        );
    }
}

export default Layout;