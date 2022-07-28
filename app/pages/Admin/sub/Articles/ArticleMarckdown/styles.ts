import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 6rem);

  border-top: 1px solid var(--medium-purple);
  padding-top: 1rem;

  h2 {
    font-size: 2rem;
    width: 100%;
    margin-bottom: 1rem;
  }
`;
