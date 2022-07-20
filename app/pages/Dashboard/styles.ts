import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding-left: 5rem;
  max-width: 1500px;

  @media(max-width: 650px) {
    padding-left: 0;
    padding-bottom: 5rem;
  }
`;

export const RigthImg = styled.aside`
  display: none;
  width: calc(100vw - 1800px);

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  img {
    min-height: 100%;
    min-width: 100%;
  }

  @media(min-width: 1800px) {
    display: block;
  }
`;