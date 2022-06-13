import React from "react";
import google from '../../assets/google.png';
import { Link } from "react-router-dom";
import './Styles.css';



const Boxlog = () => {
    
    
    return(
        <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required=""/>
            <label>Password</label>
          </div>
          <div id="logbox">
              <img className="imhgoo" src={google} alt=""/>
              <button className="btnin" type="text" name="" required="">Entrar com Google</button>
          </div>

             <div id="btnentrar">
                 <Link to={'/Home'}>ENTRAR</Link>
             </div>
            
         
        </form>

        
      </div>
    );
}

export default Boxlog;
