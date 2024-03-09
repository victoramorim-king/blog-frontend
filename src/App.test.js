import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome message in the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to my blog/);
  expect(linkElement).toBeInTheDocument();
});
