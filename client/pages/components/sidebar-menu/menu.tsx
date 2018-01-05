import * as React from 'react';
import { Menu, Icon, Button } from 'antd';

interface sideBarProps {
    handleComponentChange: (value: string) => void;
    handleWidth: (isCollapsed: boolean) => void;
}

class SideBarMenu extends React.Component<sideBarProps> {
    state = {
        collapsed: false,
        selected: 'todo'
    }

    toggleCollapsed = () => {
        const {handleWidth} = this.props;
        this.setState({
            collapsed: !this.state.collapsed,
        });

        handleWidth(this.state.collapsed);
    }

    handleSelectedMenu = ({key}) => {
        const { handleComponentChange } = this.props;

        this.setState({selected: key});
        handleComponentChange(key);
    }

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          onClick={({key}): void => this.handleSelectedMenu({key})}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
          selectedKeys={[this.state.selected]}
        >
          <Menu.Item key="todo">
            <Icon type="bars" />
            <span>To do</span>
          </Menu.Item>
          <Menu.Item key="clients">
            <Icon type="book" />
            <span>Clients</span>
          </Menu.Item>
          <Menu.Item key="products">
            <Icon type="shopping-cart" />
            <span>Products</span>
          </Menu.Item>
          <Menu.Item key="billing">
            <Icon type="wallet" />
            <span>Billing</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default SideBarMenu;
