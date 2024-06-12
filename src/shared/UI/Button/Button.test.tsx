import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('should render', () => {
    render(<Button>Toggle</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should render with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Toggle</Button>);
    expect(screen.getByRole('button')).toHaveClass('clear');
  });
});
