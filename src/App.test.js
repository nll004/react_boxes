import { render } from '@testing-library/react';
import App from './App';

test('renders app component without crashing', () => {
  render(<App />);
});
