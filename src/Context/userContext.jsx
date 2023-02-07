import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const autoLogin = async () => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response) {
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const login = async (data) => {

    setLoading(true)

    try {
      const response = await api.post("/sessions", data, {
        Headers: "Content-Type: application/JSON",
      });

      localStorage.clear();
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      toast.success("Login feito com sucesso!", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 1000,
      });

      if (response.status === 200) {
        setLoading(false);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);

      if (
        err.response.data.message == "Incorrect email / password combination"
      ) {
        toast.error("Ops! Email ou senha incorretos", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } else {
        toast.error("Ops! Algo deu errado", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <UserContext.Provider value={{ login, autoLogin, loading }}>
      {children}
    </UserContext.Provider>
  );
};
