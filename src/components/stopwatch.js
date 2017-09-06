import React, {Component} from 'react';
import Time from './format_time';

class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        };
    }

    start() {
        setTimeout(this.update, 10);
        this.setState({
            status: 'running',
            start: new Date().getTime()
        })
    }

    stop() {
        this.setState({
            status: 'stopped',

        })
    }

    update() {
        const {status, start} = this.state;
        if (status === 'running') {
            this.setState({
                elapsed: new Date().getTime() - start,
            });
            setTimeout(this.update, 10);
        }
    }


    render() {
        const {elapsed, status} = this.state;
        return (
            <div>
                <h1> {elapsed} </h1>
                <p> {status} </p>
                <button onClick={this.start}> Start</button>
                <button onClick={this.stop}> Stop</button>
                <button onClick={this.reset}> Reset</button>
            </div>
        )
    }

    reset() {
        this.setState({
            start: new Date().getTime(),
            elapsed: 0,
        })
    }

}
export default Stopwatch;