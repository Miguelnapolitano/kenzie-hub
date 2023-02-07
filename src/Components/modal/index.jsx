import { StyledButton } from "../../styles/buttons"
import { StyledText, StyledTitle } from "../../styles/typography"
import { StyledModal, StyledShadow } from "./style"
import { TechsContext } from "../../Context/techsContext";
import { useContext } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalNewTech = ({}) => {

    const { closeModalnewTech, createNewTech } = useContext(TechsContext)

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
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
            <StyledModal>                
                <div>
                    <StyledTitle tag="h2" titleType="one">Cadastrar Tecnologia</StyledTitle>
                    <StyledButton buttonType="close" onClick={closeModalnewTech}>X</StyledButton>
                </div>
                <form onSubmit={handleSubmit(createNewTech)}>
                    <fieldset>
                        <StyledText tag="label" textType="label">
                            Nome
                        </StyledText>
                        <input
                        type="text"
                        placeholder="Digite aqui o seu nome"         
                        {...register("name")}  
                        />
                        <StyledText tag="span" textType="error">
                            {errors.name?.message}  
                        </StyledText>
                    </fieldset>

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
                    <StyledButton type="submit"     buttonType="primary">Cadastrar Tecnologia</StyledButton>
                </form>                
            </StyledModal>
        </StyledShadow>
    )
}