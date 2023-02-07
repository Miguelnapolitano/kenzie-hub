import styled from "styled-components";

export const StyledRegister = styled.div`
  max-width: 400px;
  min-height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  .divSup {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 2rem 0;

    & > a {
      text-decoration: none;
      color: var(--color-white);
      font-weight: 500;
      font-size: var(--font-size-3);

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 20px;

      border-radius: 4px;

      height: 48px;

      transition: 0.6s;

      border-style: none;

      cursor: pointer;

      background-color: var(--color-grey-3);
      width: 80px;
      height: 36px;

      &:hover {
        filter: brightness(1.3);
      }
    }
  }

  .divForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;

    width: 100%;

    padding: 2.625rem 1.375rem;

    background-color: var(--color-grey-3);

    border-radius: 4px;

    & > form {
      width: 100%;

      display: flex;
      flex-direction: column;

      gap: 1rem;

      & > fieldset {
        width: 100%;
        border-style: none;

        & > select {
          background-color: var(--color-grey-2);

          height: 48px;
          width: 100%;

          border-radius: 4px;
          border-style: none;

          padding: 0 1rem;

          font-weight: 400;
          font-size: 1rem;
          color: var(--color-grey-0);

          &::placeholder {
            color: var(--color-grey-1);
          }

          &:focus {
            border: 1px solid var(--color-grey-0);
            filter: brightness(1.2);
          }
        }

        & > input {
          background-color: var(--color-grey-2);

          height: 48px;
          width: 100%;

          border-radius: 4px;
          border-style: none;

          padding: 0 1rem;

          font-weight: 400;
          font-size: 1rem;
          color: var(--color-grey-0);

          &::placeholder {
            color: var(--color-grey-1);
          }

          &:focus {
            border: 1px solid var(--color-grey-0);
            filter: brightness(1.2);
          }
        }
      }
    }
  }
`;
