import React from "react";
import { Link } from "react-router-dom";
import './Styles.css';



const Topp = () => {
    
    
    return(
    <div className="top">
        
        <div className="btnmenu"> <Link to={'SignUp'}>Cadastro</Link></div>
        <div className="btnmenu"> <Link to={'/'}>Login</Link></div>
      
    </div> 
    );
}

export default Topp;



