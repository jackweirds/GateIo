// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GateIoTrade title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GateIoTrade/i);
    expect(titleElement).toBeInTheDocument();
});
