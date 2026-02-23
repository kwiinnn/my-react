import RobotProfileImage from '../assets/cha.png'
import UserProfileImage from '../assets/user.png'
import dayjs from 'dayjs';
import './ChatMessage.css';

export function ChatMessage( { message, sender, time } ) {

  const formattedTime = dayjs(time).format('h:mma');

  return (
    <div className={
      sender==='user' ? 'message-user': 'message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className="chat-message-profile"/>
      )}
      <div className="chat-message-text">
      {message}
      <span className='chat-time'>
        {formattedTime}
      </span>
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile"/>
      )}
      
      
    </div>
  );
}