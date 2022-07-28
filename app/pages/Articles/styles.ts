import { Link } from "@remix-run/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1rem;
  padding: 5rem 1rem 1rem 1rem;
`;

export const ArticleContainer = styled(Link)`
  display: flex;

  padding: 1rem;
  background-color: var(--ultra-dark-purple);
  border: 1px solid var(--medium-purple);
  border-radius: 0.5rem;
  justify-content: space-between;

  text-decoration: none;
  color: var(--shape);

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

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