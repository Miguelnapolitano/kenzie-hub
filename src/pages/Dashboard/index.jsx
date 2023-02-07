import React, { useEffect } from "react";

import { BsPlusLg } from "react-icons/bs";


import logo from "./../../assets/logo.png";
import { StyledDashboard } from "./style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";

import { useContext } from "react";
import { TechsContext } from "../../Context/techsContext";
import { ModalNewTech } from "../../Components/modal";
import { ModalDelete } from "../../Components/modalDelete";
import { ModalEdit } from "../../Components/modalEdit";
import { Card } from "../../Components/card";


export const Dashboard = () => {

  const { userData, logout, AuthDashboard, showModal, openModalNewTech, techId, openModalDelTech, openModalEditTech, techIdEdit} = useContext(TechsContext)


  useEffect(() => {
    AuthDashboard()
  }, [userData])

    
    return (
      <StyledDashboard>
        {showModal && (
          <ModalNewTech/>
        )
        }
        {techId && (
          <ModalDelete/>
        )
        }  
        {techIdEdit && (
          <ModalEdit/>
        )
        }       
        <header>
          <img src={logo} alt="" />
          <StyledButton type="button" buttonType="grey-3" onClick={logout}>
            Sair
          </StyledButton>
        </header>
        <section className="userInf">
          <div>
            <StyledTitle tag="h2" titleType="one">
              Olá, {userData?.name}
            </StyledTitle>
            <StyledText tag="span" textType="one">
              {userData?.course_module}
            </StyledText>
          </div>
        </section>
        <section className="techs">
          <div>
            <StyledTitle tag="h2" titleType="two">
              Tecnologias
            </StyledTitle>
            <BsPlusLg className="plusIcon" onClick={openModalNewTech} />
          </div>
          <ul>
            {userData?.techs.length ? (
              userData.techs.map((item) => {
                return (
                  <Card key={item.id} item={item}/>
                );
              })
            ) : (
              <li>
                <StyledTitle tag="h3" titleType="three">
                  Não há techs por enquanto
                </StyledTitle>
              </li>
            )}
          </ul>
        </section>
      </StyledDashboard>
    );
};
