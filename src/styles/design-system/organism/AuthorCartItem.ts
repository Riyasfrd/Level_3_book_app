import styled from "styled-components";


export const AuthorCartItemDiv = styled.div`
  width: 100%;
`;

export const AuthorCartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  & > *:nth-child(n + 5) {
    display: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    width: 775px;

    & > *:nth-child(n + 5) {
      display: flex;
    }
    
    & > *:nth-child(n + 7) {
      display: none;
    }
  }
`;
