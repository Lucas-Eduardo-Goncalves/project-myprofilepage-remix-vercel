import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  
  background-color: var(--purple);
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  max-width: 20rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--medium-purple);
  }
`;