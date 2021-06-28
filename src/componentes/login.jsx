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
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQH5LkxIL0g8eQ/company-logo_200_200/0/1592320928009?e=2159024400&v=beta&t=alMTSNZROsl7CnS56FD7z1-aQQ5ySCVCU0ay3zbys5M" id="logo" alt="" />
<div class="container" id="container">
	<div class="form-container sign-up-container">
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Connexion</h1>
		
			<span>Utilisez votre compte</span>
            <input type="email"
   className="form-control" 
   placeholder="Email" 
   aria-label="email"
   aria-describedby="basic-addon1"
   ref={refEmail} />
			<input type="password" 
  className="form-control" 
  placeholder="Mot de passe" 
  aria-label="clave" 
  aria-describedby="basic-addon2" 
  ref={refPassword} />
			
            {
    error &&
    <div className=" alert alert-danger">
    {error}
</div>
}
<div className="card-footer">
    <span> mot de passe</span> <a href="http://" >recuper</a>
</div>
			<button onClick={handleLogin}>connexion</button>
		</form>
        
	</div>
    
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Devenir partenaire !</h1>
				<p>Vous souhaitez devenir partenaire de la société APTEED?</p>
                <p>Rien de plus simple il vous suffit de remplir le formulaire afin que notre équipe puisse vous contacter</p>
				<button class="ghost" id="signUp"  
                >Formulaire</button>
			</div>
		</div>
	</div>
</div>


            
        </div>
        
    )
}