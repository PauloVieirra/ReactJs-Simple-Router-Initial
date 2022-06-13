import React, { useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import'./styled.css';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

import Mj23 from '../../assets/Michael.png';
import LogChi from '../../assets/bulls.png';



 // Initialize Firebase
const firebaseApp = initializeApp ({
    apiKey: "AIzaSyCw02uJvDBtS4cHyEPvHXuNyvOGcJnQjA8",
    authDomain: "flexfit-30c81.firebaseapp.com",
    projectId: "flexfit-30c81",
   
  });
 const Home = () => {
    const [name, setName] = useState("");
    const [secondname, setSecondName] = useState("");
    const [ born, setBorn] = useState("");
    const [from,setFrom] = useState("");
    const [fit, setFit] = useState("");
    const [numb, setNumb] = useState("");
    const [pess,setPess] = useState("");
    const [prolistdata, setProlistdata] = useState("");
    const [ponto, setPonto] = useState("");
    const [rebote, setRebote] = useState("");
    const [toco, setToco] = useState("");
    const [roubo, setRoubo] = useState("");
    const [game, setGame] = useState("");
    const [falta, setFAlta] = useState("");
    const [still, setStill] = useState("");
    const [turn, setTurn] = useState("");
    const [users, setUsers] = useState([]);

    const db = getFirestore(firebaseApp);
    const usersCollectionRef = collection(db, "users");
    

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        };
        getUsers();
      }, []);


      
  
    return(
        <div className="containerg">

               <div className="sideleftpro">
               {users.map((user) => {
          return (
                  <div className="divkey" key={user.id}>
                    <div className="profileone">
                        <div className="profname">
                            <div id="firstname">
                                 {user.name}
                            </div>
                            <div id="secondname">
                                  {user.secondname}
                            </div>
                        </div>

                        <div className="profintone">
                        <div className="folnum">
                        <img className="imglog" src={LogChi} alt=""/> 
                        <div id="numbat">{user.numb} </div>
                         </div>
                             
                            <div className="follow">
                                Seguir
                            </div>
                        </div>
                    </div>
                    <div className="profilethow">
                         <div className="divdet">
                             <div id="titlet">Estatura </div>
                             <div id="contt">{user.fit}</div>
                         </div>
                         <div className="divdet">
                            <div id="titlet">Peso</div> 
                             <div id="contt">{user.pess}</div>
                         </div>
                    </div>
                    <div className="profilethree">
                            <div className="lid">
                             <div className="ti">Nascimento</div>
                             <div className="ti">Cidade</div>
                             <div className="ti">Pro List</div>
                            
                            </div>
                            <div className="li">
                              <div className="ti">{user.born}</div>
                              <div className="ti">{user.from}</div>
                              <div className="ti">{user.prolistdata}</div>
                                
                            </div>
                    </div>
                </div>
                );
            })}
              </div>

              <div className="sideringtpro">
                     
              </div>
               
            
                  <div className="scolt">
                  {users.map((user) => {
             return (
                  <div className="divkey" key={user.id}>
                  <div className="gener">
                  <r3 className="r3">Geral</r3>

                         <div className="atrib">
                             <div className="titlesco">Pontos</div>
                             <div className="numbersc">{user.ponto}</div>
                          </div>

                         <div className="atrib">
                             <div className="titlesco">Rebote</div>
                             <div className="numbersc">{user.rebote}</div>
                          </div>

                          <div className="atrib">
                             <div className="titlesco">Toco</div>
                             <div className="numbersc">{user.toco}</div>
                          </div>

                          <div className="atrib">
                             <div className="titlesco">Roubo</div>
                             <div className="numbersc">{user.roubo}</div>
                          </div>

                          <div className="atrib">
                             <div className="titlesco">Game</div>
                             <div className="numbersc">{user.game}</div>
                          </div>

                          <div className="atrib">
                             <div className="titlesco">Falta</div>
                             <div className="numbersc">{user.falta}</div>
                          </div>

                  </div>
                  <div className="media">
                      <r3 className="r3">Media</r3>
                      
                         <div className="atrib">
                         <div className="titlesco">Pontos</div>
                             <div className="numbersc">--</div>
                          </div>

                           <div className="atrib">
                         <div className="titlesco">Rebote</div>
                             <div className="numbersc">--</div>
                          </div>
                          
                          <div className="atrib">
                         <div className="titlesco">Toco</div>
                             <div className="numbersc">--</div>
                          </div>

                          <div className="atrib">
                         <div className="titlesco">Falta</div>
                             <div className="numbersc">--</div>
                          </div>

                          <div className="atrib">
                         <div className="titlesco">Still</div>
                             <div className="numbersc">--</div>
                          </div>

                          <div className="atrib">
                             <div className="titlesco">Turn-Over</div>
                             <div className="numbersc">--</div>
                          </div>
                  </div>

                  </div>
                );
            })}

              </div>
        </div>
    );
}

export default Home;