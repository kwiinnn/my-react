import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';

export function ChatInput( {chatMessages, setChatMessages} ) {
  const [inputText, setInputText ] = useState('');

  const isInputEmpty = inputText.trim() === ''

  function saveInputText (event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (isInputEmpty) return;

    const timestamp = dayjs().valueOf();
    const newChatMessages = [...chatMessages, 
    {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID(),
      time: timestamp
    }];
    
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages, 
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time: timestamp
      }
    ]);
    setInputText('');
  
  }


  return (
  <div className="chat-input-container">
    <input 
      className="input-text"
      placeholder="Send a message to Cha" 
      size="40"
      onChange={saveInputText}
      value={inputText}
    />
    <button
      onClick={sendMessage}
      className="send-button"
      disabled={isInputEmpty}
    >Send</button>
  </div>
  );
}