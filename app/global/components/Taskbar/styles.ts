import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  
  width: 5rem;
  gap: 0.5rem;
  z-index: 2;
  transition: width 0.2s;
  background-color: var(--dark-purple);

  &:hover {
    width: 13rem;
  }

  @media(max-width: 650px) {
    top: unset;
    left: 0;
    bottom: 0;
    right: 0;
    height: 5rem;
    width: unset;
    flex-direction: row;
    align-items: center;
  
    &:hover {
      width: unset;
    }
  }
`;

export const NavButton = styled(Link)`
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  svg {
    min-width: 2rem;
    min-height: 2rem;
    margin-right: 1.5rem;
  }

  &:hover {
    background-color: var(--ultra-dark-purple);
  }

  @media(max-width: 650px) {
    height: 5rem;
    p {
      display: none;
    }
  }
`;