import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './Welcome';
import ScalesAndNotes from './ScalesAndNotes';
import FretboardTut from './FretboardTut'

function Tutorial () {
    return (
        <div className="Tutorial">
            <Switch>
                <Route path="/tutorial/welcome" component={Welcome} />
                <Route path="/tutorial/fretboard" component={FretboardTut} />
                <Route path="/tutorial/scales-and-notes" component={ScalesAndNotes} />
            </Switch>
        </div>
    );
}

export default Tutorial;