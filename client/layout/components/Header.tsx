import * as React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
const { Header: AntHeader } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Link } from 'react-router-dom'

class Header extends React.Component<any, any> {
  
  handleClick = (e) => {
    e.preventDefault();
    const { logOut } = this.props;
    return logOut();
  }

  render() {
    const { location, auth, logOut, profile } = this.props;
    let selectedKey = /dashboard/.test(location.pathname) ? '/dashboard' : location.pathname;

    return (
      <AntHeader style={{ position: 'fixed', width: '100%', display: 'inline-flex' }}>
      <Icon type="api" style={{ fontSize: 62, color: '#08c', paddingRight: 25 }} />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px', width: '100%' }}
        selectedKeys={[selectedKey]}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
        {auth.isAuth && <SubMenu title={<span><Icon type="user" />{auth.name ? auth.name.toUpperCase() : 'No name'}</span>} style={{float: 'right'}}>
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
