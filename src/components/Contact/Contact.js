import React, { useRef, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import emailjs from '@emailjs/browser';
import Loader from './Loader';
import Popup from './Popup'; // Import the Popup component
import Resume from './Resume';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.section`
  padding: 20px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.span`
  font-size: 16px;
  color: #AAA;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: white;
`;

const Button = styled.button`
  background-color: #00FFAA;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_6gz4b5m', 'template_fynx1qu', form.current, {
        publicKey: 'tmgeeEwQFpFSnAkVq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          setShowPopup(true);

          setName('');
          setEmail('');
          setMsg('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        }
      );
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Section id='contactPage'>
      <Resume/>
      <Container>
        <div id='contact'>
          <Title className='contactPagetitle'>Contact Me</Title>
          <Description className='contactDesc'>Please fill out the form to get in touch with me!</Description>
          <Form className='contactForm' ref={form} onSubmit={sendEmail}>
            <Input
              type="text"
              className='name'
              placeholder='Your Name'
              name="your_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              className='email'
              placeholder='Your Email'
              name="your_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextArea
              name='message'
              rows='5'
              placeholder='Your message'
              className='msg'
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            {loading ? <Loader /> : <Button className='submitBtn' type='submit'>Submit</Button>}
          </Form>
          {showPopup && <Popup message="Thank you for reaching out! I will get back to you within 24 hours" onClose={handleClosePopup} />}
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
