import styled from "styled-components";

export const InputStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  background-color: transparent;
  border-bottom: 2px solid var(--color-primary);
  outline-style: none;
  position: relative;

  & > label {
    font-size: 16px;
    border-style: none;
    color: var(--color-primary50);
    align-self: start;
    width: max-content;
  }

  & > input,
  textarea {
    width: 100%;
    margin: 0 10px;
    padding: 10px;
    outline-style: none;
    border-radius: 5px;
    border-style: none;
}
`;
