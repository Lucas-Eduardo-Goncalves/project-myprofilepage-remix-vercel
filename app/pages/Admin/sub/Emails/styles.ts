import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 6rem);

  h2 {
    font-size: 2rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 0.5rem;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  border: 1px solid var(--medium-purple);
  border-radius: 0.5rem;
  background-color: var(--ultra-dark-purple);
`;
