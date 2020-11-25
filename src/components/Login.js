import "../styles.css";
import React, { useState } from "react";
import imgLogin from '../imagens/img-login.png';
import imgLogout from '../imagens/img-logout.png';

const Login = () => {
  const tipos = [
    { mensagem: "Por favor, faça login!", urlImagem: imgLogin,  label: "login",  status: 0 },                 
    { mensagem: "Seja bem-vindo!",        urlImagem: imgLogout, label: "Logout", status: 1 },
  ];

  const [ loginState, setLoginState] = useState({
    mensagem : tipos[0].mensagem,
    urlImagem: tipos[0].urlImagem,
    altImagem: tipos[0].label,
    dsButton : tipos[0].label,
    status   : tipos[0].status,
  });

  const onLoginLogout = () => { 
    let _idx = loginState.status === 0 ? 1 : 0; 
    setLoginState({
      mensagem : tipos[_idx].mensagem,
      urlImagem: tipos[_idx].urlImagem,
      altImagem: tipos[_idx].label,
      dsButton : tipos[_idx].label,
      status   : tipos[_idx].status,
    });
  }

  return (
    <div>
      <h1 className="h1-titulo">{loginState.mensagem}</h1>
      <img className="card" src={loginState.urlImagem} alt={loginState.altImagem} /> 
      <button type="button" className="botao" onClick={onLoginLogout}>{loginState.dsButton}</button>  
    </div>
  );
}

export default Login;