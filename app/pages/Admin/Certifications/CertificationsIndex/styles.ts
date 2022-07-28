import styled from "styled-components";

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
width: 100%;
gap: 0.5rem;
`;

export const GridItem = styled.div`
height: 20rem;
width: 30rem;
background-color: red;
border-radius: 0.5rem;
`;