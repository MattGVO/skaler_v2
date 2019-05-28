import React from 'react';
import Fretboard from '../Fretboard/Fretboard';
import Landing from '../Landing/Landing';
import { Switch, Route } from 'react-router-dom'

function Home () {
    return (
        <div className="Home">
            <Switch>
                <Route exact path ="/" component={Landing}/>
                <Route path="/fretboard" component={Fretboard}/>
            </Switch>
            {/* <Fretboard/> */}
            <div className="Flip">
                <h1>This app is designed for a wider screen.</h1>
                <h1>Rotate your device to the side and enjoy!</h1>
                <div className="Flip-Demo">
                    <i className="fas fa-mobile-alt"></i>
                    <i className="fas fa-arrow-right"></i>
                    <i className="Side fas fa-mobile-alt"></i>
                </div>
            </div>
        </div>
    );
}

export default Home;