import styled from "styled-components";


export const CartSectionContainer = styled.div`
    margin-top: 20px;
`;

export const CartSectionDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;

    & > *:nth-child(n + 5) {
            display: none;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        width: 775px;

        & > *:nth-child(-n + 5) {
      display: flex;
    }

    & > *:nth-child(n + 6) {
      display: none;
    }
}
`;

