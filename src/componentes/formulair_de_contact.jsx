/* eslint-disable react/style-prop-object */
import './App.css';
import React from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() { 

  // eslint-disable-next-line no-unused-vars
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_xs37xla', e.target, 'user_iDsaUtGQCWug1JsbZi1uI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
       
      });

  }

  return (
      <div class="card-container">
        <img src="https://media-exp1.licdn.com/dms/image/C560BAQH5LkxIL0g8eQ/company-logo_200_200/0/1592320928009?e=2159024400&v=beta&t=alMTSNZROsl7CnS56FD7z1-aQQ5ySCVCU0ay3zbys5M" id="logo" alt="" />
      <div class="card u-clearfix">
        <div class="card-body">
          
        {/* <h1>Contact</h1> */}
        <form id="contact_form" className="contact-form" onSubmit={sendEmail}>
          <div id="flex">
        <div class="email">
      <label for="email"></label>
      <input type="text" placeholder=" Nom" name="name" id="email_input"/>
    </div>

    <div class="name">
      <label for="email"></label>
      <input type="text" placeholder=" Prénom" name="prénom" id="email_input"/>
    </div>

        <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="Téléphone" name="phone" id="name_input" />
      </div>
      </div>
      <div class="email">
      <label for="email"></label>
      <input type="text" placeholder="la sosiété" name="sosiete" id="email_input"/>
    </div>

    <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="N° SIRET" name="SIRET" id="name_input" />
      </div>

    

    <div class="name">
      <label for="name"></label>
      <select placeholder="Domaine" name="subject" id="subject_input" required>
        <option disabled hidden selected>Commercial</option>
        <option>Centre d'appel</option>
        <option>Production audio/vidéo</option>
        <option>Design</option>
        <option>Médical</option>
        <option>Média</option>
        <option>Publicité</option>
        <option>Autre</option>
      </select>
    </div>
    
    <div class="telephone">
      <label for="name"></label>
      <input type="email" placeholder="Email" name="email" id="telephone_input" />
    </div>
    
  
    
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
    </div>
<button class="ghost" id="signUp" 
                >Formulaire</button>
        </form>
        </div>
        <div  class="coté">
          <h2>Nos cordonnées</h2>
          <div class="cordo">
          <h5>📞 Numéro:</h5>
          <p> 06 72 15 24 95</p>
          <h5>✉️ Email:</h5>
          <p> contact@apteed.fr</p>
          <h5>🌍Adress:</h5>
          <h9 >       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          620 Avenue de la Roche Fourcade 
13400 Aubagne 
        </a>
</h9> 
<h5> 🕧 Lun-Ven: 09:00-19:00</h5>

       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          620 Avenue de la Roche Fourcade 
13400 Aubagne 
        </a>


          </div>
        </div>
      </div>
      <div class="card-shadow"></div>
    </div>
    );
}