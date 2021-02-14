
import {useState} from "react"
import Form from "./components/form"
import Feed from "./components/feed"
import AppContext from './components/AppContext'

require('dotenv').config()

function App() {
   
  const [feed,setfeed]=useState([]);

  const userSettings = {
    feed,
    setfeed
  };

  return (

    <AppContext.Provider value={userSettings}>
    <div className="flex-container">
      <div className="flex-child">
       <Form />
      </div>
      <div className="flex-child">  
        <Feed />
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
