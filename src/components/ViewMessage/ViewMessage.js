import styles from './ViewMessage.module.css';
import AppProvider from '../AppProvider/AppProvider'

import MessageList from '../MessageList/MessageList';
import MessageDisplay from '../MessageDisplay/MessageDisplay';

const ViewMessage = () => {
    return (
        <div>
             <div className={styles.messageDisplay}>
                <AppProvider>
                    <MessageList/>
                    <MessageDisplay/>
                </AppProvider>
            </div>
        </div>
    );
};

export default ViewMessage;