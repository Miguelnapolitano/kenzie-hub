import { StyledButton } from "../../styles/buttons"
import { StyledText, StyledTitle } from "../../styles/typography"
import { StyledModalEdit } from "./style"
import { StyledShadow } from "./../modal/style"
import { TechsContext } from "../../Context/techsContext";
import { useContext } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalEdit = ({}) => {

    const { closeModalEditTech, editTech, techName } = useContext(TechsContext)

    const formSchema = yup.object().shape({
        status: yup.string(),
      });


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });

    
    
    return (
        <StyledShadow>
            <StyledModalEdit>                
                <div>
                    <StyledTitle tag="h2" titleType="one">Editar Tech</StyledTitle>
                    <StyledButton buttonType="close" onClick={closeModalEditTech}>X</StyledButton>
                </div>
                <form onSubmit={handleSubmit(editTech)}>
                    <StyledTitle tag="h2" titleType="one">{techName}</StyledTitle>

                    <fieldset>
                        <StyledText tag="span" textType="label">
                        Selecione o status
                        </StyledText>
                        <select {...register("status")}>
                            <option value="Iniciante">
                                Iniciante
                            </option>
                            <option value="Intermediário">
                                Intermediário
                            </option>
                            <option value="Avançado">
                                Avançado
                            </option>                        
                        </select>
                    </fieldset>
                    <StyledButton type="submit" buttonType="primary">Editar</StyledButton>
                </form>                
            </StyledModalEdit>
        </StyledShadow>
    )
}