import styled from "styled-components";

export const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    min-height: 100vh;

    max-width: 400px;

    margin: 0 auto;

    .loginDiv{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        gap: 1rem;

        padding: 2.625rem 1.375rem;
        margin-top: 2rem;

        width: 100%;
        border-radius: 4px;

        background-color: var(--color-grey-3);
        
        & > form{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            gap: 1.5rem;

            & > fieldset{

              width: 100%;
              border-style: none;

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
  
                &::placeholder{
                color: var(--color-grey-1);
                }
  
                &:focus{
                    border: 1px solid var(--color-grey-0);
                    filter: brightness(1.2);
                }
              }

            }

        }

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

                transition: .6s;

                border-style: none;

                cursor: pointer;

                background-color: var(--color-grey-1);
                width: 100%;

                &:hover{
                  filter: brightness(1.3);
                }
            }

    }



   
`