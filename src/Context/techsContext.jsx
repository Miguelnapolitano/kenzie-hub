import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../services/api";
export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [techId, setTechId] = useState(null);
  const [techIdEdit, setTechIdEdit] = useState(null);
  const [techName, setTechName] = useState("");

  const AuthDashboard = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response) {
          setUserData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/");
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const openModalNewTech = () => {
    setShowModal(true);
  };

  const closeModalnewTech = () => {
    setShowModal(false);
  };

  const openModalDelTech = (event) => {
    setTechId(event.target.id);
  };

  const closeModalDelTech = () => {
    setTechId(null);
  };

  const openModalEditTech = (event) => {
    setTechIdEdit(event.target.id);
    setTechName(event.target.children[0].innerText);
  };

  const closeModalEditTech = () => {
    setTechIdEdit(null);
  };

  const createNewTech = async (data, event) => {
    event.preventDefault();

    const token = localStorage.getItem("@TOKEN");

    const { name, status } = data;

    const newData = {
      title: name,
      status,
    };

    try {
      const response = await api.post("/users/techs", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        toast.success("Nova tech cadastrada! Parabéns!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        setShowModal(false);
      } else {
        toast.error("Ops! Algo deu errado.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deletetech = async () => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.warn("Tech deletada com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      setTechId(null);
    } catch (err) {
      console.log(err);
    }
  };

  const editTech = async (data, event) => {
    event.preventDefault();

    const token = localStorage.getItem("@TOKEN");

    const { status } = data;

    const newData = {
      status,
    };

    try {
      const response = await api.put(`/users/techs/${techIdEdit}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        toast.success("Tech editada!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });

        setTechIdEdit(null);
      } else {
        toast.error("Ops! Algo deu errado.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TechsContext.Provider
      value={{
        userData,
        logout,
        AuthDashboard,
        showModal,
        openModalNewTech,
        closeModalnewTech,
        createNewTech,
        deletetech,
        openModalDelTech,
        closeModalDelTech,
        techId,
        openModalEditTech,
        closeModalEditTech,
        techIdEdit,
        editTech,
        techName,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
