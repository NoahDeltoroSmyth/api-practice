import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './views/Home/Home';
// import App from './App';

test('app renders a list of pinball names', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  await waitFor(
    async () => {
      const linkElement = await screen.findByRole('heading', { name: /a-b-c bowler/i });
      expect(linkElement).toBeInTheDocument();
    },
    { timeout: 5000 }
  );
});
