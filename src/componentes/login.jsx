/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import '../css/login.css';


  

const URL_LOGIN = "http://localhost/php/login.php";

const enviarData = async ( url, data )=> {

   const resp = await fetch (url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log(resp);
    // eslint-disable-next-line no-unused-vars
    const json = await resp.json();
    //console.log(json);

    return json;

}
// eslint-disable-next-line react/jsx-no-undef

// eslint-disable-next-line no-unused-vars

  
export default function Login (props) {
    const [error, setError]= useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refEmail = useRef(null);
    const refPassword= useRef(null);

    const handleLogin= async()=> {
        const data= {
            "email" : refEmail.current.value,
            "password": refPassword.current.value
        };
        console.log(data);
        const respuestaJson = await enviarData ( URL_LOGIN, data );
        console.log("bien connecter", respuestaJson);

        props.acceder(respuestaJson.conectado);
        setError(respuestaJson.error);
    }
// eslint-disable-next-line react/jsx-no-undef
// eslint-disable-next-line no-unused-vars


    return(
        <div className="login">
            <div className="row">
              <div className="col-sm-4 offset-4 mt-5">
          
                  <div className="card pt-5">
                      <div className="card-header text-center">
                          <h3> Connexion </h3>
                      </div>
                      <div className="card-body">
                      <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">📧</span>
  </div>
  <input type="email"
   className="form-control" 
   placeholder="Email" 
   aria-label="email"
   aria-describedby="basic-addon1"
   ref={refEmail} />
   
</div>
<div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon2">🔒</span>
  </div>
  <input type="password" 
  className="form-control" 
  placeholder="Mot de passe" 
  aria-label="clave" 
  aria-describedby="basic-addon2" 
  ref={refPassword}
      />
</div>
{
    error &&
    <div className=" alert alert-danger">
    {error}
</div>
}

<button
onClick={handleLogin}
className="btn btn-info btn-lg btn-block "> Acceder </button>
<div className="card-footer">
    <span> mot de passe</span> <a href="http://" >recuper</a>
</div>

     </div>
                  </div>
              </div>
            </div>
            
        </div>

        
    )
}