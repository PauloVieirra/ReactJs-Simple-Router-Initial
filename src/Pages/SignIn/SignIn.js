import React,{useState} from "react";
import { Link } from "react-router-dom";
import Boxlog from "../../Components/Loginbox/Boxlog";
import Bask from '../../assets/baskd.jpg';
import './Styles.css';


const SignIn = () => {

    const [log, setLog] = useState('5');

    
  
    
    return(
   <div className="body">

       <div className="geral">
            
            <div className="sideleft"> 

            <div id="boxselet">

                    <div id="titleselet">SELETIVA </div>
                      <span></span>
                     <div id="textselet">
                      <br/>adshgja asda  asdas d d dasdasd 
                      <br/>askdj kj kj o ooi kj kjh lkj  k  
                      <br/>sda ssd  flkdfpsop  opo  po ;l; 
                      <br/>adshgja asda  asdas d d dasdasd 
                      <br/>askdj kj kj o ooi kj kjh lkj  k  
                     </div> 
                    
                      

               
             <button id="btnselet" type="text" name="" required="">Inscreva-se</button>
             </div>
             </div>
             

           <div className="sideringt">
              {log && 
              <Boxlog/>
              }
           
           </div>
       </div>
    </div>
    );
}

export default SignIn;