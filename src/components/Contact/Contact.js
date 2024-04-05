import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

import C1 from '../../images/Uni of A Photo.jpg';
import C2 from '../../images/Uni of A Photo.jpg';
import C3 from '../../images/Uni of A Photo.jpg';
import C4 from '../../images/Uni of A Photo.jpg';

import FB from '../../images/Uni of A Photo.jpg';
import DC from '../../images/Uni of A Photo.jpg';
import LI from '../../images/Uni of A Photo.jpg';
import IG from '../../images/Uni of A Photo.jpg';

const Contact = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [msg,setMsg] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_6gz4b5m', 'template_fynx1qu', form.current, {
            publicKey: 'tmgeeEwQFpFSnAkVq',
          })
          .then(
            () => {
              console.log('SUCCESS!');

              setName('');
              setEmail('');
              setMsg('');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );

      };

  return (
    <section id='contactPage'>

        <div id='clients'>
            <h1 className='contactPagetitle'>My Clients</h1>
            <p className='clientDesc'>The companies I had the opportunity working in</p>
            <div className='clientImgs'>
                <img src={C1} alt='' className='clientImg'/>
                <img src={C2} alt='' className='clientImg'/>
                <img src={C3} alt='' className='clientImg'/>
                <img src={C4} alt='' className='clientImg'/>
            </div>
        </div>

        <div id='contact'>
            <h1 className='contactPagetitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form to discuss with me</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name="your_name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" className='email' placeholder='Your Email' name="your_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea name = 'message' rows='5' placeholder='Your message' className='msg' value={msg} onChange={(e) => setMsg(e.target.value)}/>
                <button className='submitBtn' type='submit' value='Send'>Submit</button>
                <div className='links'>
                    <img src={FB} alt="" className='link'/>
                    <img src={DC} alt="" className='link'/>
                    <img src={LI} alt="" className='link'/>
                    <img src={IG} alt="" className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
