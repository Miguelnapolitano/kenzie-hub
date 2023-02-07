import styled from "styled-components";

export const StyledDashboard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    max-width: 780px;
    min-height: 100vh;

    margin: 0 auto;
        
    & > header{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 2rem 0;

        & > a {
            text-decoration: none;
            color: var(--color-white);
            font-weight: 500;
            font-size: var(--font-size-3);

            background-color: var(--color-grey-3);
            
            display: flex;
            justify-content: center;
            align-items: center;

            width: 80px;
            height: 36px;

            padding: 20px;

            border-radius: 4px;

            height: 48px;

            transition: .6s;

            border-style: none;

            cursor: pointer;         
            
            &:hover{
                filter: brightness(1.3);
            }
            }
    }
    
    .techs{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 2rem;

        gap: 2rem;
        
            & > div{
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;
            }

            & > ul{
            width: 100%;
            height: fit-content;

            background-color: var(--color-grey-3);

            border-radius: 4px;

            padding: 1rem;

            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 1rem;
            }
     }
    .userInf{

        width: 100%;
        height: 120px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-top: 1px solid var(--color-grey-3);
        border-bottom: 1px solid var(--color-grey-3);

            & > div {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
    }


    .plusIcon{
            color: var(--color-grey-0);
            background-color: var(--color-grey-3);
            width: 32px;
            height: 32px;
            padding: 8px;

            border-radius: 4px;

            cursor: pointer;

            transition: .6s;

            &:hover{
                filter: brightness(1.3);
            }
        }

    .trashIcon{
        color: var(--color-grey-0);

            width: 24px;
            height: 24px;
        

        cursor: pointer;

        transition: .4s;

        &:hover{
            transform: scale(1.2);
        }
    }

    `