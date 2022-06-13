import React from "react";
import google from '../../assets/google.png';
import './Styles.css';



const Cadlog = () => {
    
    
    return(
        <div className="cad-box">
        <h2>Cadastro</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Nome completo</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Senha</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Nome do Pai</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Nome da Mae</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Endereco</label>
          </div>
          
          

          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            Cadastrar
            </a>
         
        </form>
      </div>
    );
}

export default Cadlog;
