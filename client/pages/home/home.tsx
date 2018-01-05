import * as React from 'react';
import { Row, Col } from 'antd';
import SideBarMenu from '../components/sidebar-menu/menu';
import styled from 'react-emotion';

import ToDoComponent from '../components/todo/todo';
import ProductListComponent from '../components/productsList/productList';
import ClientsListComponent from '../components/clientsList/clientsList';
import BillingComponent from '../components/billing/billingComponent';


class HomePage extends React.Component {
  state = {
    currentComponent: 'todo',
    sideBarWidth: 4,
    componentWidth: 20
  }

  handleComponentChange = (value: string) =>  {
    console.log(value);
    this.setState({currentComponent: value})
  };

  handleWidth = (isCollapsed: boolean) => {
    if (!isCollapsed) {
      this.setState({sideBarWidth: 2, componentWidth: 22})
    } else {
      this.setState({sideBarWidth: 4, componentWidth: 20})
    }
  };

  render() {
    const ComponentWrapper = styled('div')`
      background: #fff;
      min-height: 500px;
      height: 100%;
    `;

    const selectedComponent = {
      todo: <ToDoComponent />,
      clients: <ClientsListComponent />,
      products: <ProductListComponent />,
      billing: <BillingComponent />
    }

    return (
      <Row>
        <Col span={this.state.sideBarWidth}>
          <SideBarMenu handleComponentChange={this.handleComponentChange} handleWidth={this.handleWidth} />
        </Col>
        <Col span={this.state.componentWidth}>
          <ComponentWrapper>
            {selectedComponent[this.state.currentComponent]}
          </ComponentWrapper>
        </Col>
      </Row>
    );
  }
}

export default HomePage;
