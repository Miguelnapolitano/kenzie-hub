import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { StyledRegister } from "./style";
import logo from "../../assets/logo.png";
import { StyledTitle, StyledText } from "./../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import { api } from "../../services/api";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    password1: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        "Senha deve conter ao menos 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial."
      )
      .min(8, "Mínimo de 8 caracteres"),
    passwordConfirm: yup.string().required("Confirmação de senha obrigatória"),
    bio: yup.string().required("Nos diga algo sobre você."),
    contact: yup.string().required("Contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const {
      email,
      password1,
      passwordConfirm,
      name,
      bio,
      contact,
      course_module,
    } = data;

    const newData = {
      email,
      password: password1,
      name,
      bio,
      contact,
      course_module,
    };

    if (password1 === passwordConfirm) {
      try {
        const response = await api.post("/users", newData, {
          Headers: "Content-Type: application/JSON",
        });

        toast.success("Novo usuário cadastrado!", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 1500,
        });

        navigate("/");
      } catch (err) {
        console.log(err);
        toast.error("Ops, algo deu errado!", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2500,
        });
      }
    } else {
      toast.error("As senhas são diferentes!", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2500,
      });
    }
  };

  return (
    <StyledRegister>
      <div className="divSup">
        <img src={logo} alt="" />
        <Link to="/">Voltar</Link>
      </div>
      <div className="divForm">
        <StyledTitle tag="h2" titleType="one">
          Crie sua conta
        </StyledTitle>
        <StyledText tag="span" textType="one">
          Rápido e grátis, vamos nessa!
        </StyledText>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <StyledText tag="label" textType="label">
              Email
            </StyledText>
            <input
              type="text"
              placeholder="Digite aqui o seu email"
              {...register("email")}
            />
            <StyledText tag="span" textType="error">
              {errors.email?.message}
            </StyledText>
          </fieldset>

          <fieldset>
            <StyledText tag="label" textType="label">
              Senha
            </StyledText>
            <input
              type="password"
              placeholder="Digite aqui a senha"
              {...register("password1")}
            />
            <StyledText tag="span" textType="error">
              {errors.password1?.message}
            </StyledText>
          </fieldset>

          <fieldset>
            <StyledText tag="label" textType="label">
              Confirmar Senha
            </StyledText>
            <input
              type="password"
              placeholder="Confirme a senha"
              {...register("passwordConfirm")}
            />
            <StyledText tag="span" textType="error">
              {errors.passwordConfirm?.message}
            </StyledText>
          </fieldset>

          <fieldset>
            <StyledText tag="label" textType="label">
              Bio
            </StyledText>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <StyledText tag="span" textType="error">
              {errors.bio?.message}
            </StyledText>
          </fieldset>

          <fieldset>
            <StyledText tag="label" textType="label">
              Contato
            </StyledText>
            <input
              type="text"
              placeholder="telefone ou link de rede social"
              {...register("contact")}
            />
            <StyledText tag="span" textType="error">
              {errors.contact?.message}
            </StyledText>
          </fieldset>

          <fieldset>
            <StyledText tag="span" textType="label">
              Selecione o módulo
            </StyledText>
            <select {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
          </fieldset>

          <StyledButton type="submit" buttonType="primary">
            Cadastrar
          </StyledButton>
        </form>
      </div>
    </StyledRegister>
  );
};
