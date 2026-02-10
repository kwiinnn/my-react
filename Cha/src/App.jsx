import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import RobotProfileImage from './assets/cha.png'
import UserProfileImage from './assets/user.png'
import './App.css'

function ChatInput( {chatMessages, setChatMessages} ) {
  const [inputText, setInputText ] = useState('');

  function saveInputText (event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [...chatMessages, 
    {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID()
    }];
    
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages, 
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    setInputText('');
  
}


  return (
  <div className="chat-input-container">
    <input 
      placeholder="Send a message to Cha" 
      size="40"
      onChange={saveInputText}
      value={inputText}
      className="input-text"
    />
    <button
      onClick={sendMessage}
      className="send-button"
    >Send</button>
  </div>
  );
}

function ChatMessage( { message, sender } ) {
  return (
    <div className={
      sender==='user' ? 'message-user': 'message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
      {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile"/>
      )}
    </div>
  );
}

function ChatMessages ( {chatMessages} ) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  
  return (
  <div className="chat-messages-container"
    ref={chatMessagesRef}>
    {chatMessages.map((chatMessage) => {
      return (
        <ChatMessage 
          message = {chatMessage.message}
          sender = {chatMessage.sender}
          key = {chatMessage.id}
        />
      );
    })}
  </div>
  );

}

function App () {
  const [chatMessages, setChatMessages] = useState([{
    message: 'hello, cha',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'hi',
    sender: 'robot',
    id: 'id2'
  }, {
    message: "i'm sorry, i messed up",
    sender: 'user',
    id: 'id3'
  }, {
    message: "it's fine",
    sender: 'robot',
    id: 'id4'
  }]);
  return (
    <div className="app-container">
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      
    </div>
  );
}

export default App
