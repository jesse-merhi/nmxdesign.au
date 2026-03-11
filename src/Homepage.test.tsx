import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Homepage from './Homepage';

afterEach(() => {
  cleanup();
});

describe('Homepage', () => {
  it('renders the recruiter-facing hero copy and employer logos', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        /I design products for complicated environments: enterprise platforms, internal tools, and AI-assisted workflows\./,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Worked at')).toBeInTheDocument();
    expect(screen.getByAltText('Atlassian logo')).toBeInTheDocument();
    expect(screen.getByAltText('ReadyTech logo')).toBeInTheDocument();
  });

  it('no longer renders the trait cards below the fold', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    expect(screen.queryByRole('heading', { name: 'Creative' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Experimenter' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Can-doer' })).not.toBeInTheDocument();
  });
});
