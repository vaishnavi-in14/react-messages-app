import './MessageList.css';
import { useAppProvider } from '../AppProvider/AppProvider';

const MessageList = () => {
    const { selected, setSelected, messages } = useAppProvider();
    const selectedMessage = messages.find((message) => message.selected);

    return (
        <ul>
            {messages.map((message) => {
                const classNames = message === selectedMessage ? 'selectedTitle' : undefined;
                return (
                    <li 
                        className={classNames} 
                        onClick={() => {
                            if(selected) selected.selected = false;
                            message.selected = true;
                            setSelected(message);
                        }}
                    >
                        <span key={message.id}>{message.brief}</span>
                    </li>
                );
            })
            }
        </ul>
    );
};

export default MessageList;