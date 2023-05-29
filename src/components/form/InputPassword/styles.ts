import styled from "styled-components";

export const PasswordBox = styled.div`
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

  & > input {
    width: 100%;
    padding: 10px;
    border-style: none;
    outline-style: none;
    border-radius: 5px;
    border-style: none;
  }

  & > button {
    background-color: transparent;
    border-style: none;
    color: var(--color-primary50);
    margin-right: 10px;
    z-index: 10;
    position: absolute;
    right: 0;
    bottom: 0;

    :hover {
      color: var(--color-primary);
    }
  }
`;
