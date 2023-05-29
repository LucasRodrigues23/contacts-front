import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary50);
    & > div {
        width: 95%;
        max-width: 1200px;
        height: 80px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;  
   
        & > div {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
`