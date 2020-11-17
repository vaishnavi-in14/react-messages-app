import { useAppProvider } from '../AppProvider/AppProvider';
import styles from './MessageDisplay.module.css';

const MessageDisplay = () => {
    const { message, deleteMessage } = useAppProvider();
    return (
        <div>
            {message && (
                <div>
                    <div className={styles.messageDisplay}>
                        <p>{message.brief}</p>
                        <p>{message.detail}</p>
                    </div>
                    <div className={styles.checkboxDelete}>
                        <label>
                            <input
                                type="checkbox"
                            />
                            Mark as Read
                        </label>
                        <button className={styles.btn}
                            onClick={() => deleteMessage(message.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}

            {!message && <p>No message is selected for display</p>}
        </div>
    );
};

export default MessageDisplay;