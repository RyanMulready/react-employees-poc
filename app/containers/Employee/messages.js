/*
 * Employees Messages
 *
 * This contains all the text for the Employees component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.Employees';

export default defineMessages({
  firstname: {
    id: `${scope}.firstname`,
    defaultMessage: 'First Name',
  },
  lastname: {
    id: `${scope}.lastname`,
    defaultMessage: 'Last Name',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  empinfo: {
    id: `${scope}.empinfo`,
    defaultMessage: 'Employee Information',
  },
  phoneinfo: {
    id: `${scope}.phoneinfo`,
    defaultMessage: 'Phone Information',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Phone',
  },
  extension: {
    id: `${scope}.extension`,
    defaultMessage: 'Extension',
  },
  altphone: {
    id: `${scope}.altphone`,
    defaultMessage: 'Alt Phone Number',
  },
  mobilephone: {
    id: `${scope}.mobilephone`,
    defaultMessage: 'Mobile Phone Number',
  },
  mobileprovider: {
    id: `${scope}.mobileprovider`,
    defaultMessage: 'Mobile Provider',
  },
  pager: {
    id: `${scope}.pager`,
    defaultMessage: 'Pager',
  },
  fax: {
    id: `${scope}.fax`,
    defaultMessage: 'Fax',
  },
  emergencycontact: {
    id: `${scope}.emergencycontact`,
    defaultMessage: 'Emergency Contact',
  },
  addressinformation: {
    id: `${scope}.addressinformation`,
    defaultMessage: 'Address Information',
  },
  streetaddress: {
    id: `${scope}.streetaddress`,
    defaultMessage: 'Street Address',
  },
  state: {
    id: `${scope}.state`,
    defaultMessage: 'State',
  },
  zip: {
    id: `${scope}.zip`,
    defaultMessage: 'Zip',
  },
  floorsuite: {
    id: `${scope}.floorsuite`,
    defaultMessage: 'Floor and Suite',
  },
  location: {
    id: `${scope}.location`,
    defaultMessage: 'Location',
  },
  permissions: {
    id: `${scope}.permissions`,
    defaultMessage: 'Permissions',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  }
});
