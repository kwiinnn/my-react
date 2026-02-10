import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'

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
