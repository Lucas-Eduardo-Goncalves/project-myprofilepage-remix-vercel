import { Link } from "@remix-run/react";
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

  a {
    margin-left: auto;
  }
  
  svg {
    font-size: 2rem;
    color: var(--purple);
  }

  @media(max-width: 500px) {
    flex-direction: column;
    justify-content: center;

    a {
      margin-left: unset;
      margin-top: 1rem;
    }
  }
`;

export const SimpleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 20rem;
  padding: 1rem 2rem;

  font-size: 1rem;
  font-weight: 600;
  
  border: none;
  border-radius: 0.5rem;
  background-color: var(--purple);
  color: #fff;
  text-decoration: none;
  
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--medium-purple);
  }
`; 