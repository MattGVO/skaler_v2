import React from 'react';
import Fretboard from '../Fretboard/Fretboard';
import Landing from '../Landing/Landing';
import { Switch, Route } from 'react-router-dom'
import Tutorial from '../Tutorial/Tutorial';

function Home () {
  
    return (
        <div className="Home">
            <Switch>
                <Route exact path ="/" component={Landing}/>
                <Route path="/fretboard" component={Fretboard}/>
                <Route path="/tutorial" component={Tutorial}/>
            </Switch>
        </div>
    );
}

export default Home;