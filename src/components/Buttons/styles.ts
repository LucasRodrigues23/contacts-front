import styled, { css } from "styled-components";
interface iButtonStyledProps {
    size: 'lg' | 'md' | 'sm'
    theme: 'primary' | 'grey'
}
export const ButtonStyled = styled.button<iButtonStyledProps>`
    font-weight: 600;
    font-size: 16px;
    border-radius: 8px;
    transition: 0.5ms;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ size }) => {
        switch (size) {
            case 'lg':
                return css`
                padding: 20px;
                width: 95%;
                `
            case 'md':
                return css`
                padding: 10px 20px;
                `
            case 'sm':
                return css`
                padding: 5px 10px;
                font-size: 12px;
                `
        }
    }}

    ${({ theme }) => {
        switch (theme) {
            case 'primary':
                return css`
                background-color: var(--color-primary);
                border: 1px solid var(--color-primary);
                color: var(--color-grey0);
                &:hover{
                color: var(--color-grey1);
                background-color: var(--color-primary50);
                }
                `
            case 'grey':
                return css`
                border: 1px solid var(--color-grey1);
                color: var(--color-grey3);
                :hover{
                border: 1px solid var(--color-grey3);
                color: var(--color-grey1);
                }
                `
        }
    }}
        

`