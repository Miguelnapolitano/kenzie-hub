import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";

import { StyledButton } from "../../styles/buttons";
import { StyledText, StyledTitle } from "../../styles/typography";
import logo from "../../assets/logo.png";
import { StyledLogin } from "./style";
import { UserContext } from "../../Context/userContext";
import { Loading } from "../../Components/loading/Loading";

export const LoginPage = () => {
  const { login, autoLogin, loading } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    autoLogin();
  }, []);

  if (!loading) {
    return (
      <StyledLogin>
        <img src={logo} alt="" />
        <div className="loginDiv">
          <StyledTitle tag="h2" titleType="one">
            Login
          </StyledTitle>
          <form onSubmit={handleSubmit(login)}>
            <fieldset>
              <StyledText tag="label" textType="label">
                Email
              </StyledText>
              <input
                type="email"
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
                {...register("password")}
              />
              <StyledText tag="span" textType="error">
                {errors.password?.message}
              </StyledText>
            </fieldset>
            <StyledButton type="submit" buttonType="primary">
              Entrar
            </StyledButton>
          </form>
          <StyledText tag="span" textType="two">
            Ainda não possui conta?
          </StyledText>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </StyledLogin>
    );
  } else {
    return <Loading type={"bars"} />;
  }
};
