import styled from "styled-components"

export const StyledForm = styled.form`
    width: 90%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: fixed;
    background: transparent;

    & > p {
        color: var(--color-primary);
    }
`

export const StyledForm2 = styled.form`
    width: 90%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: var(--color-grey600);

    & > p {
        color: var(--color-primary);
    }
`