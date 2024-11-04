import React from 'react';
import './styles.css';
import { Container } from 'react-bootstrap';
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { AutoResizingTextarea } from '../../molecules/AutoResizingTextarea';

export const MessageInput = ({inputValue, setInputValue, handleSendMessage}) => {
    return (
      <Container fluid className="message-container">
            <button className='botaoIcone'>
                <FaMicrophone />
            </button>
            <AutoResizingTextarea
                value={inputValue}
                onChange={(text) => setInputValue(text)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                    }
                }}
                placeholder="Escreva sua mensagem..."
                maxLength={10000}

            />
            <button className='botaoIcone' onClick={handleSendMessage}>
                <IoMdSend className="send-icon" />
            </button>
        </Container>
    
  );
}