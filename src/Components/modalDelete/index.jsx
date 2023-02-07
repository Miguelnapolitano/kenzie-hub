import { StyledButton } from "../../styles/buttons"
import { StyledTitle } from "../../styles/typography"
import { TechsContext } from "../../Context/techsContext";
import { useContext } from "react";
import { StyledShadow } from "../modal/style";
import { StyledModalDelete } from "./style";


export const ModalDelete = ({}) => {

    const { closeModalDelTech, deletetech } = useContext(TechsContext)
   
    return (
        <StyledShadow>
            <StyledModalDelete>
                <StyledButton buttonType="close" onClick={closeModalDelTech}>X</StyledButton>
                <StyledTitle className="message" tag="h4" titleType="one">Tem certeza que deseja excluir esta Tech?</StyledTitle>
                <section>
                    <StyledButton className="choices" buttonType="grey-3" onClick={deletetech}>Pode apagar</StyledButton>
                    <StyledButton className="choices" buttonType="primary" onClick={closeModalDelTech}>Melhor não</StyledButton>
                </section>  
            </StyledModalDelete>
        </StyledShadow>
    )
}