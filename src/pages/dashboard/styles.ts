import styled from "styled-components";

export const StyledDashboard = styled.main`
    width: 100%;

    & > ul {
        margin: 20px auto;
        width: 95%;
        max-width: 1200px;
        height: 500px;
        display: flex;
        align-items: start;
        align-content: start;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;   
    }

    & > button {
        width: 75px;
        height: 75px;
        background-color: var(--color-primary);
        border-radius: 50%;
        position: fixed;
        bottom: 50px;
        right: 50px;
        font-size: 36px;
        color: white;
        border-style: none;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover{
            font-size: 56px;
            transition: 0.3s ease;
        }
    }

`