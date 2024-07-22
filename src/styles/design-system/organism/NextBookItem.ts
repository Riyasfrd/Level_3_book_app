import styled from "styled-components";

export const NextBookItemDiv = styled.div`
    
`;

export const NextBookTitle = styled.div`
    margin: 10px 0;
`;

export const NextBookWrapper = styled.div`
    display: flex:
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > *:nth-child(n + 4) {
            display: none;
    }
    
`;
