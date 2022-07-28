import { Link } from '@remix-run/react';
import styled, { css } from 'styled-components';

interface LinkButtonProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 4;
  min-width: 10rem;
`;

export const LinkButton = styled(Link) <LinkButtonProps>`
  display: block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;

  color: var(--shape);
  font-weight: 600;

  background-color: var(--dark-purple);

  &:hover {
    background-color: var(--medium-purple);
  }

  ${({ isActive }) => isActive && css`
    background-color: var(--medium-purple);
  `}
`;
