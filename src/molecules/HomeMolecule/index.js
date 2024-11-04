

import React, { useCallback, useEffect, useState } from 'react';
import './styles.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Copelo from '../../img/Copelo.jpg.png';
import { ChatWindow } from '../ChatWindow';
import { MessageInput } from '../MessageInput';
import { FiAlignJustify } from "react-icons/fi";

export const HomeMolecule = ({ setShowHistory, showHistory }) => {

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = useCallback(() => {
    if (inputValue.trim() !== '') {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages(newMessages);
      setInputValue('');

      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'Essa é uma resposta automática do chatbot', sender: 'bot', hasMenu: true }
        ]);
      }, 500);
    }
  }, [inputValue, messages]);

  const handleRatings = useCallback((isPositive) => {
    const message = isPositive
      ? 'Que bom que pude ajudar!'
      : 'Poxa! Vi que sua resposta foi negativa, me conte o motivo';
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'bot', hasMenu: false }]);
  }, []);

  useEffect(() => {
    const lastMessageElement = document.querySelector('.chat-window > :last-child');
    if (lastMessageElement) {
      lastMessageElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="home-container">
      <Row className="content align-items-center">
        {!messages.length && (
        <>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src={Copelo} alt="Mascote Copel" className="mascot-image" fluid />
          </Col>
          <Col xs={12} md={6} className="mt-3 descrição">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus massa in ullamcorper dignissim. Etiam.
            </p>
          </Col>
        </>
        )}
        <Col xs={12} >
          <ChatWindow messages={messages} handleRatings={handleRatings} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className=''>
          <MessageInput inputValue={inputValue} setInputValue={setInputValue} handleSendMessage={handleSendMessage} />
        </Col>
        <Col xs={12} className="text-center mt-2">
          <Button  variant='link' className="history-icon" onClick={() => setShowHistory(!showHistory)}>
            <FiAlignJustify className="history-icon"/>
          </Button>
        </Col>
      </Row>
    </div>
  );
}
