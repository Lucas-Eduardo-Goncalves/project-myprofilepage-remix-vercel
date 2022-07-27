import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 6rem);
  padding: 5rem 1rem 1rem 1rem;

  h1 {
    font-size: 2rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ViewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  max-width: 60rem;
  padding: 1rem 0;

  border: 1px solid var(--medium-purple);
  border-radius: 0.25rem;
  background-color: var(--ultra-dark-purple);

  .wmde-markdown {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 1rem;

    ul, ol {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0 1rem;
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
