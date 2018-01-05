import * as React from 'react';
import styled from 'react-emotion';

import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const { Header: AntHeader, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { Link } from 'react-router-dom'

class Header extends React.Component<any, any> {

  handleClick = (e) => {
    e.preventDefault();
    const { logOut } = this.props;
    console.log(this.props)
    return logOut();
  }

  render() {
    const { location, auth, logOut } = this.props;

    return (
      <AntHeader style={{ position: 'fixed', width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Home page</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
        {auth.isAuth && !auth.error && <SubMenu title={<span><Icon type="user" />{auth.userName.toUpperCase()}</span>} style={{float: 'right'}}>
          <Menu.Item key="setting:1">
            <Button ghost type="danger" onClick={this.handleClick} style={{width: '100%'}}>Logout</Button>
          </Menu.Item>
        </SubMenu>}
      </Menu>
    </AntHeader>
    );
  }
}

export default Header;
