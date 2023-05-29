import styled from "styled-components";

export const StyledLoginPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Layer1 = styled.div`
    width: 50%;
    height: 100vh;
    background: rgb(25,25,25);
    background: linear-gradient(180deg, rgba(65,65,65,1) 0%, rgba(25,25,25,1) 100%);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        & > div {
        opacity: 0;
        width: 0px;
        height: 0px;
        transition: 0.9s ease;
        }
    }

    & > div {
        width: 100%;
        height: 100%;
        position: relative;
        background: rgb(75,0,130);
        background: linear-gradient(180deg, rgba(75,0,130,1) 0%, rgba(28,0,60,1) 100%);
        transition: 0.9s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;

        & > span {
            font-size: 3rem;
            font-weight: 300;
            color: var(--color-grey0);
            &:hover{
                display: none;
            }
        }
    }  
`
export const Layer2 = styled.div`
    width: 50%;
    height: 100vh;
    background: rgb(25,25,25);
    background: linear-gradient(180deg, rgba(65,65,65,1) 0%, rgba(25,25,25,1) 100%);
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        & > div {
        opacity: 0;
        width: 0px;
        height: 0px;
        transition: 0.9s ease;
        }
    }

    & > div {
        width: 100%;
        height: 100%;
        position: relative;
        background: rgb(75,0,130);
        background: linear-gradient(180deg, rgba(75,0,130,1) 0%, rgba(28,0,60,1) 100%);
        transition: 0.9s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;

        & > span {
            font-size: 3rem;
            font-weight: 300;
            color: var(--color-grey0);
            &:hover{
                display: none;
            }
        }
    }  
`