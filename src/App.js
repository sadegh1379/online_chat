import React, { useState } from "react";
import ButtonAppBar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import ChatRoom from "./components/chat/ChatRoom";
import Login from "./components/login/Login";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  

 

  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Login loading={loading} setLoading={setLoading} {...props} />}
        />
        <Route
          exact
          path="/chatroom"
          component={(props) => <ChatRoom  {...props} />}
        />
      </Switch>

     
    </div>
  );
}

export default App;
