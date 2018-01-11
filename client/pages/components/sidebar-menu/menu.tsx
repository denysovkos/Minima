import * as React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom'

interface sideBarProps {
  location: string;
}

class SideBarMenu extends React.Component<sideBarProps> {
    state = {
        selected: this.props.location.substring(this.props.location.lastIndexOf('/') + 1)
    }

    handleSelectedMenu = ({key}) => {
        this.setState({selected: key});
    }

  render() {
    return (
      <div style={{ width: '100%', marginTop: 64, height: '100%', paddingLeft: 10, paddingTop: 10 }} >
        <Menu
          onClick={({key}): void => this.handleSelectedMenu({key})}
          mode="horizontal"
          selectedKeys={[this.state.selected]}
        >
        <Menu.Item key="dashboard">
          <Link to="/dashboard"><Icon type="bars" /> Dashboard</Link>
        </Menu.Item>
          <Menu.Item key="todo">
            <Link to="/dashboard/todo"><Icon type="bars" /> To do</Link>
          </Menu.Item>
          <Menu.Item key="clients">
            <Link to="/dashboard/clients"><Icon type="book" /> Clients</Link>
          </Menu.Item>
          <Menu.Item key="products">
            <Link to="/dashboard/products"><Icon type="shopping-cart" /> Products</Link>
          </Menu.Item>
          <Menu.Item key="billing">
            <Link to="/dashboard/billing"><Icon type="wallet" /> Billing</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideBarMenu;
