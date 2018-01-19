/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Content } = Layout;
import 'antd/dist/antd.css';
import 'css/custom.css'
import HomePage from 'containers/HomePage/Loadable';
import Employees from 'containers/Employees/Loadable';
import Employee from 'containers/Employee/Loadable'
import Foot from 'components/Foot/Loadable';
import Sidebar from 'components/Sidebar/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content>
          <div style={{ padding: 24, background: '#fff', height: '100%' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/employees" component={Employees} />
              <Route path="/employee/:id" component={Employee} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Content>
        <Foot />
      </Layout>
    </Layout>
  );
}
