import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
`;

export const AboutTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  max-width: 60rem;

  > p {
    font-size: 1rem;
    user-select: none;
  }
`;

export const SocialArea = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  button {
    margin-left: auto;
  }
  
  svg {
    font-size: 2rem;
    color: var(--purple);
  }

  @media(max-width: 500px) {
    flex-direction: column;
    justify-content: center;

    button {
      margin-left: unset;
      margin-top: 1rem;
    }
  }
`;