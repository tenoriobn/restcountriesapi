import userEvent from '@testing-library/user-event';
import {render} from '@testing-library/react';
// setup function
export default function customRender(jsx: React.ReactElement) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx),
  };
}
