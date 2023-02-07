import styled from "styled-components";


export const StyledCard = styled.li`

    width: 100%;
    height: 48px;

    background-color: var(--color-grey-4);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;

    border-radius: 4px;

    transition: .6s;

    &:hover{
        filter: brightness(.5);
    }

    & > .div-text{
        width: 80%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
    }

    & > div{
        width: 5%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        & > .trashIcon{
            position: relative;
            z-index: 21;
            /* pointer-events: all; */
        }
    }

`