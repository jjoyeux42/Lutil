import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders dashboard page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Vérifiez un élément qui existe réellement dans votre application
  // Par exemple, la présence du composant Layout
  const layoutElement = document.querySelector('.layout');
  expect(layoutElement).toBeInTheDocument();});
