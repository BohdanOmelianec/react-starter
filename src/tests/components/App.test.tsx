import { render, screen } from '@testing-library/react';
import App from '../../App';

test('should render heading', () => {
  render(<App />);
  const t = screen.getByRole('heading');
  expect(t).toBeInTheDocument();
});
