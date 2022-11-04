import React from 'react'

import '../components/Contact.css';

function Contact() {
  const agrement = "You agree to providing your data to {name} who may contact you.";
  return (
    <div className='container'>
      <div className='contactContainer'>
        <article className='section_padding sOne'>
          <div className='contactMe'>Contact Me</div>
          <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </article>
        <article>
          <form>
            <div className='parent'>
              <div>
                <label>First name</label>
                <input type="text" id="first_name" placeholder='Enter your first name' />
              </div>
              <div>
                <label>Last name</label>
                <input type="text" id="last_name" placeholder='Enter your last name' />
              </div>
            </div>
            <label>Email</label>
            <input type="text" id="email" placeholder='yourname@email.com' />

            <label>Message</label>
            <textarea id="message" cols="30" rows="10" placeholder="Send me a message and I' ll reply you as soon as possible..."></textarea>
            <div id="check"><input type="checkbox" name="" id="box" /><p>{agrement}</p></div>
            <button id="btn__submit"><span>Send message</span></button>
          </form>
        </article>
      </div>
    </div>
  )
}

export default Contact
