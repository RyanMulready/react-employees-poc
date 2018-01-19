/**
 *
 * Employee
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Select, Input, Form, Button  } from 'antd';
import { compose } from 'redux';
import { makeSelectEmployees, makeSelectMetaData, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import { getEmployees, getMetadata } from './saga';
const Option = Select.Option;
const FormItem = Form.Item;

export class Employee extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    function selectListChange(value) {
      console.log(`selected ${value}`);
    }
    const floatRight = {
      float: 'right',
    };
    let employee = {}
    if(this.props.employees) {
      employee = this.props.employees.find(item => item.id === this.props.match.params.id)
    }
    return (
      <div>
        <Helmet>
          <title>Employees</title>
          <meta name="description" content="Description of Employees" />
        </Helmet>
        {(this.props.employees && this.props.metadata) &&
            <Row>
              <Col span={12}>
                <FormattedMessage {...messages.empinfo}>
                  {(msg) => (<h2>{msg}</h2>)}
                </FormattedMessage>
                <FormattedMessage {...messages.firstname}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.firstname} id="firstname" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.lastname}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.lastname} id="lastname" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.email}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.email} id="email" />)}
                </FormattedMessage>

                <br /><br />
                <FormattedMessage {...messages.phoneinfo}>
                  {(msg) => (<h2>{msg}</h2>)}
                </FormattedMessage>
                <FormattedMessage {...messages.phone}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.phone} id="phone" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.extension}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.extension} id="extension" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.altphone}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.altphone} id="altphone" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.mobilephone}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.mobile} id="mobilephone" />)}
                </FormattedMessage>
                <br />
                <FormattedMessage {...messages.mobileprovider} />
                <Select defaultValue={employee.mobileprovider.value} style={{ width: '68%' }} id="mobileprovider" onChange={selectListChange}>
                  {this.props.metadata.mobileproviders.map(function(item, index){
                    return <Option key={index} value={item.value}>{item.label}</Option>;
                  })}
                </Select>
                <FormattedMessage {...messages.pager}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.pager} id="pager" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.fax}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.fax} id="fax" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.emergencycontact}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.contact} id="emergencycontact" />)}
                </FormattedMessage>
              </Col>
              <Col span={12}>
                <FormattedMessage {...messages.addressinformation}>
                    {(msg) => (<h2>{msg}</h2>)}
                </FormattedMessage>
                <FormattedMessage {...messages.streetaddress}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.address} id="streetaddress" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.state}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.state} id="state" />)}
                </FormattedMessage>
                <FormattedMessage {...messages.zip}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.zip} id="zip" />)}
                </FormattedMessage>
                <br />
                <FormattedMessage {...messages.floorsuite} />
                <Select defaultValue={employee.floor.value} style={{ width: '68%' }} id="floor" onChange={selectListChange}>
                  {this.props.metadata.floors.map(function(item, index){
                    return <Option key={index} value={item.value}>{item.label}</Option>;
                  })}
                </Select>
                <FormattedMessage {...messages.location}>
                  {(msg) => (<Input style={{ width: '80%' }} addonBefore={msg} value={employee.location} id="location" />)}
                </FormattedMessage>
              </Col>
            </Row>
        }
        <br /><br />
        <FormattedMessage {...messages.save}>
          {(msg) => (<Button type="primary" style={floatRight}>{msg}</Button>)}
        </FormattedMessage>
        <br clear="all" />
      </div>
    );
  }
}

Employee.propTypes = {
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
)(Employee);
