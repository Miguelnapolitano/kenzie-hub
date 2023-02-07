import { StyledCard } from "./style";
import { TechsContext } from "../../Context/techsContext";

import { FiTrash2 } from "react-icons/fi";
import { useContext } from "react";
import { StyledText, StyledTitle } from "../../styles/typography";

export const Card = ({item}) => {

    const { openModalDelTech, openModalEditTech} = useContext(TechsContext)

    return (
        <StyledCard >
            <div id={item.id} className="div-text"  onClick={openModalEditTech}>
                <StyledTitle tag="h3" titleType="three">
                {item.title}
                </StyledTitle>
                <StyledText tag="span" textType="one">
                    {item.status}
                </StyledText>
            </div>            
            <div id={item.id}>
                <FiTrash2  id={item.id} className="trashIcon" onClick={openModalDelTech}></FiTrash2>           
            </div>
      </StyledCard>
    );
}

