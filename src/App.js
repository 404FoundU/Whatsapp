import React  from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./Login";
import {useUser} from "./UserProvider";

function App() {
    const user = useUser();
    return (

        <div className="app">
            {!user ? (<Login/>)
            :
            (<div className="app__body">
                <Router >
                    <Sidebar/>
                    <Switch>
                        <Route path="/rooms/:roomId">
                            <Chat/>
                        </Route>
                        <Route path="/">
                            <Chat/>
                        </Route>

                    </Switch>
                </Router>

            </div>)}
        </div>
    );
}

export default App;
