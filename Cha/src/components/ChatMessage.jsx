import RobotProfileImage from '../assets/cha.png'
import UserProfileImage from '../assets/user.png'

export function ChatMessage( { message, sender } ) {
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