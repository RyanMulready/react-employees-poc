/*
 * Employees Messages
 *
 * This contains all the text for the Employees component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.Employees';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is Employees container !',
  },
});
