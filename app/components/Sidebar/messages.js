/*
 * Sidebar Messages
 *
 * This contains all the text for the Sidebar component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.Sidebar';

export default defineMessages({
  homepage: {
    id: `${scope}.homepage`,
    defaultMessage: 'Homepage',
  },
  employees: {
    id: `${scope}.employees`,
    defaultMessage: 'Employees',
  },
});
