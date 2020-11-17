import './SendMessage.css';

import { useState } from 'react';

const MessageSent = ({ messageSentCallback }) => {
    return (
        <div className="sent">
            <p>Message sent successfully</p>
            <button onClick={messageSentCallback}>OK</button>
        </div>
    )
}

const SendMessage = ({ submitMessage }) => {
    const [brief, setBrief] = useState('');
    const [detail, setDetail] = useState('');
    const [hideInputs, setHideInputs] = useState(false);

    return (
        <div>
            {!hideInputs && (
                <form
                    onSubmit={(event) => {
                        submitMessage(brief, detail);
                        setBrief('');
                        setDetail('');
                        setHideInputs(true);
                        event.preventDefault();
                    }}
                    className="items"
                >
                    <div>
                        <label htmlFor="brief">Brief</label>
                        <input 
                            type="text" 
                            id="brief"
                            onChange={(event) => setBrief(event.target.value)}
                            value={brief}
                    />
                    </div>

                    <div>
                        <label htmlFor="detail">Details</label>
                        <textarea 
                            rows="5" 
                            cols="20"
                            onChange={(event) => setDetail(event.target.value)}
                            value={detail}
                        />
                    </div>
                    <input className="btn" type="submit" value="Add"/>
                </form>
            )}

            {hideInputs && <MessageSent messageSentCallback={() => setHideInputs(false)}/>}
        </div>
    );
};

export default SendMessage;