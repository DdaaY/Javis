import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 


function App () {
    return(
        <Router>
            <div>
                <Navbar/>
                <Switch> {/*TODO according to current URL with <Route> URLs*/}
                    <Route path = './about'>
                        About
                    </Route>
                    <Route path = '/'>
                        <h1>Sign in/Up</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;