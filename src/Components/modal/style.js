import styled  from "styled-components"

export const StyledShadow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;

    width: 100vw;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
`


export const StyledModal = styled.div`
    width: 420px;
    min-width: 280px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    position: relative;
    z-index: 99;

    padding-bottom: 2rem;

    background-color: var(--color-grey-3);

    border-radius: 4px;

    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0.5rem;

        width: 100%;
        height: 60px;

        background-color: var(--color-grey-2);

        border-radius: 4px 4px 0 0;
        
    }

    & > form{
        width: 95%;

        display: flex;
        flex-direction: column;

        gap: 2rem;

        margin: 0 auto;

        & > fieldset{

        width: 100%;
        border-style: none;

        & > select{
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

    & > button{
            margin: 0 auto;
            width: 95%;
        }

`