import styled  from "styled-components"


export const StyledModalDelete = styled.div`
    width: 480px;
    min-width: 280px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    gap: 1.5rem;

    position: relative;
    z-index: 99;

    background-color: var(--color-grey-1);

    border-radius: 4px;

    padding: 1rem;

    .message{
        width: 100%;
        text-align: center;

        font-size: 1.5rem;
    }
        
    & > section {
        width: 100%;
        height: 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .choices{
        width: 200px;
        height: 100%;
    }

    
    
    
`