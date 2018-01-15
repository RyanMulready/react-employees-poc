/**
*
* Foot
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Layout } from 'antd';
import messages from './messages';

const { Footer } = Layout;

function Foot() {
  return (
    <div>
      <Footer style={{ textAlign: 'center' }}>
        <FormattedMessage {...messages.footer} />
      </Footer>
    </div>
  );
}

Foot.propTypes = {

};

export default Foot;
