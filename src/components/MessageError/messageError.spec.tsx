import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import MessageError from "./index";
import customRender from 'src/tests/utils/customRender';

describe('', () => {
  it('should render the message passed as children to the component', () => {
    const message = "Errors";

    customRender(
      <MessageError>
        {message}
      </MessageError>
    );

    expect(screen.getByText(message)).toBeInTheDocument();
  });
});