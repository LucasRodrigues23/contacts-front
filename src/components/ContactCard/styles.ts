import styled from "styled-components";

export const StyledContactCard = styled.li`
    background-color: var(--color-grey4);
    width: 18%;
    min-width: 150px;
    border-radius: 8px;
    height: 120px;
    position: relative;
    padding: 10px;
    opacity: 0.6;
    &:hover{
        opacity: 1;
        transition: 0.3s;
    }
    & > p {
        color: var(--color-grey0);
        font-size: 0.8rem;
        margin: 8px 0;
    }

    & > button {
        position: absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        border-style: none;
        padding: 5px;
        color: white;
        font-size: 20px;
        font-weight: 1000;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            background-color: var(--color-grey0);
            opacity: 0.5;
            transition: 0.3s;
            color: var(--color-grey4);
        }
    }
`

export const StyledEditButtons = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: var(--color-grey4 );
    border-radius: 8px;

    animation: animation 600ms ease forwards;
    @keyframes animation{
    0% {
        opacity: 0%;
    }
    100% {
        opacity: 100%;
    }
}
`