import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  overflow: hidden;

  height: calc(100vh - 2rem);
  width: 100%;
  padding-left: 2rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  letter-spacing: -3px;

  @media (max-width: 650px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 1rem 0;
  font-size: 1rem;
  color: var(--dark-shape);

  span {
    color: var(--purple);
  }
`;

export const SimpleButton = styled(Link)`
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
  
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--medium-purple);
  }
`; 