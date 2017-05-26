import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import AppState from './AppState';
import TimerView from './App';
import {observable} from 'mobx';

// defined state and make it observable.

var appState = observable({
    timer: 0
});

appState.resetTimer = function() {
    appState.timer = 0;
};

setInterval(function() {
    appState.timer += 1;
}, 1000);


// We didn't make our appState observable for nothing;
// you can now create views that automatically update whenever relevant data in the appState changes.



render(<TimerView appState={appState} />, document.getElementById('root'));