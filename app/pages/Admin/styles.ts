import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  gap: 1rem;

  padding: 5rem 1rem 1rem 1rem;
`;

export const ReturnHomeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 3rem;

  border: none;
  border-radius: 0.25rem;

  position: fixed;
  left: 1rem;
  top: 1rem;

  background-color: var(--purple);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;