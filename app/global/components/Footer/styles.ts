import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  margin: 2rem;

  a {
    color: var(--shape);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media(max-width: 450px) {
    flex-direction: column;
  }
`; 