/**
 *
 * Employees
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Table } from 'antd';
import { makeSelectEmployees, makeSelectMetaData, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import { getEmployees, getMetadata } from './saga';

const rowSelection = {
};

export class Employees extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  createNameLink(text, row) {
    return (
      <span>
        <a href={"/employee/" + row.id}>{row.lastname}, {row.firstname}</a>
      </span>
    );
  }
  render() {
    if(this.props.metadata) {
      this.props.metadata.columns.employeescolumns[0].render = (text, row) => this.createNameLink(text, row)
    }
    return (
      <div>
        <Helmet>
          <title>Employees</title>
          <meta name="description" content="Description of Employees" />
        </Helmet>
        {(this.props.employees && this.props.metadata) &&
          <Table rowSelection={rowSelection} columns={this.props.metadata.columns.employeescolumns} dataSource={this.props.employees} />
        }
      </div>
    );
  }
}

Employees.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  employees: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  metadata: PropTypes.oneOfType([
    PropTypes.object
  ])
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  employees: makeSelectEmployees(),
  metadata: makeSelectMetaData(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const employeesSaga = injectSaga({ key: 'employees', saga: getEmployees });
const metaDataSaga = injectSaga({ key: 'metadata', saga: getMetadata });

export default compose(
  employeesSaga,
  metaDataSaga,
  withConnect,
)(Employees);
