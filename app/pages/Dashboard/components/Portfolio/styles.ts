import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;

  > p {
    margin-bottom: 1rem;
  }
`;

export const PortfolioTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
`;

export const ProjectsArea = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 1rem 0;
  
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    gap: 1rem;
    flex: 1;
    height: 100%;

    border: 2px solid var(--purple);
    border-radius: 0.5rem;

    transition: filter 0.2s;

    h3 {
      width: 100%;
      padding: 0.5rem 1rem;
      text-align: center;
      background-color: var(--purple);
    }

    img {
      flex: 1;
      margin: 1rem;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.5);
    }
  }

  @media(max-width: 1150px) {
    flex-direction: column;
  }
`;

export const NavArea = styled.nav`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    color: var(--dark-shape);

    a {
      color: var(--shape);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    margin-left: auto;
  }
`;