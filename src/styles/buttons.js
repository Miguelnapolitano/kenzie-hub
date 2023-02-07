import styled, { css } from "styled-components";


export const StyledButton = styled.button`
  color: var(--color-white);
  font-weight: 500;
  font-size: var(--font-size-3);

  
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  border-radius: 4px;

  height: 48px;

  transition: .4s;

  border-style: none;

  cursor: pointer;

  ${({ buttonType }) => {
    switch (buttonType) {
      case "primary":
        return css`
          background-color: var(--color-primary);
          width: 100%;
          
          &:hover{
            filter: brightness(1.3);
          }

        `;
      case "disable":
        return css`
          background-color: var(--color-primary-disable);
          width: 100%;
          
          &:hover{
            filter: brightness(1.3);
          }

        `;
      case "grey-1":
        return css`
          background-color: var(--color-grey-1);
          width: 100%;

          &:hover{
            filter: brightness(0.7);
          }
        `;
      case "grey-3":
        return css`
          background-color: var(--color-grey-3);
          width: 80px;
          height: 36px;

          &:hover{
            filter: brightness(1.3);
          }
        `;
        case "close":
        return css`
          background-color: var(--color-grey-3);
          width: 24px;
          height: 12px;
          background-color: transparent;

          &:hover{
            filter: brightness(1.3);
          }
        `;
    }
  }}
`;