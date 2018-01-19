/**
*
* Sidebar
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import messages from './messages';

const { Sider } = Layout;

class Sidebar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
        <Icon type="home" />
            <span className="nav-text"><Link to="/"><FormattedMessage {...messages.homepage} /></Link></span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            <span className="nav-text"><Link to="employees"><FormattedMessage {...messages.employees} /></Link></span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

Sidebar.propTypes = {

};

export default Sidebar;
