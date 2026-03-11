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
    ).toBeTruthy();
    expect(screen.getByText('Worked at')).toBeTruthy();
    expect(screen.getByAltText('Atlassian logo')).toBeTruthy();
    expect(screen.getByAltText('ReadyTech logo')).toBeTruthy();
  });

  it('no longer renders the trait cards below the fold', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    expect(screen.queryByRole('heading', { name: 'Creative' })).toBeNull();
    expect(screen.queryByRole('heading', { name: 'Experimenter' })).toBeNull();
    expect(screen.queryByRole('heading', { name: 'Can-doer' })).toBeNull();
  });
});
