import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class TimerView extends React.Component {
    render() {
        return (<button onClick={this.onReset.bind(this)}>
                Seconds passed: {this.props.appState.timer}
            </button>);
    }

    onReset () {
        this.props.appState.resetTimer();
    }
};

 // Understanding observable, computed, reactions and actions is enough to master MobX and use it in your applications

export default TimerView;