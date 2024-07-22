import styled from "styled-components";

export const CartBookDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    
    img {
    display: block;
    width: 92px;
    height: 140px;
    align-self: center;
    }

    Typography {
        align-items: center;
        margin: 0;
    }

    div{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4 {
            margin-bottom: 5px;
        }
    }
`;