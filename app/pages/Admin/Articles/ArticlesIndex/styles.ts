import { Link } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1rem;
`;

export const ArticleContainer = styled.div`
  display: flex;

  padding: 1rem;
  background-color: var(--ultra-dark-purple);
  border: 1px solid var(--medium-purple);
  border-radius: 0.5rem;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    > div {
      display: flex;
      align-items: end;
      gap: 1em;

      h3 {
        font-size: 1.5rem;
      }
    }
  } 
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  border: none;
  border-radius: 0.25rem;

  background-color: var(--purple);
  transition: filter 0.2s;
  color: var(--shape);

  &:hover {
    filter: brightness(0.8);
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  border: none;
  border-radius: 0.25rem;

  background-color: var(--warning);
  transition: filter 0.2s;
  color: var(--shape);

  &:hover {
    filter: brightness(0.8);
  }
`;