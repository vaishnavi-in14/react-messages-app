import { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);
const { Provider } = AppContext;

const AppProvider = ({children}) => {
    const [selected, setSelected] = useState(undefined);

    var ID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const useMessages = () => {
        const [messages, setMessages] = useState([]);

        function addMessage(brief, detail) {
          const message = {};
          message.brief = brief;
          message.detail = detail;
          message.read =  false;
          message.id = ID();
    
          setMessages([message].concat(messages));
        }
    
        function deleteMessage(messageId) {
          const restOfMessages = messages.filter((message) => messageId !== message.id);
          setMessages(restOfMessages);
        }
    
        return [messages, addMessage, deleteMessage];
    }

    const [messages, addMessage, deleteMessage] = useMessages();

    return (
        <Provider value={{ selected, messages, setSelected, addMessage, deleteMessage }}>
            {children}
        </Provider>
    );
};

const useAppProvider = () => {
    const { selected, messages, setSelected, addMessage, deleteMessage } = useContext(AppContext);
    return { selected, messages, setSelected, addMessage, deleteMessage };
};

export default AppProvider;
export { useAppProvider };