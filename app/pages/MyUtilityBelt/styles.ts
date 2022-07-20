import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 5rem 1rem 1rem 1rem;
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

export const MyUtilityBeltTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  user-select: none;
`;

export const TechnologiesCard = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem;

  border-radius: 0.5rem;
  background-color: var(--ultra-dark-purple);

  img {
    height: 5rem;
    width: 5rem;
  }

  > div {
    margin-left: 2rem;

    div {
      display: flex;
      align-items: end;

      gap: 1rem;
      margin-bottom: 1rem;

      h3 {
        font-size: 1.5rem;
        line-height: 1.5rem;
        
        a {
          text-decoration: none;
          color: var(--shape);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;