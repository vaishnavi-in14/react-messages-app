import './App.css';

import NavBar from '../NavBar/NavBar';
import SendMessage from '../SendMessage/SendMessage';
import ViewMessage from '../ViewMessage/ViewMessage';

import { useState } from 'react';
import { useAppProvider } from '../AppProvider/AppProvider';

function App() {
  const [selected, setSelected] = useState(0);
  const { addMessage } = useAppProvider();

  const submitMessage = (brief, detail) => {
    addMessage(brief, detail);
  }
  
  return (
    <div>
        <div className="App">
            <NavBar selected={selected} setSelected={setSelected}/>
        </div>
        <div className="main">
            {selected === 0 ? 
                <SendMessage submitMessage={submitMessage}/> : 
                <ViewMessage/>}
        </div>
    </div>
  );
};

export default App;
