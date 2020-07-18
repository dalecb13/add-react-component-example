/*
  Displays current time
*/

"use strict";

const e = React.createElement;

class ClockComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return e(
      "p",
      null,
      `The current time is: ${this.state.date.toLocaleTimeString()}`
    );
  }
}

const domContainer = document.querySelector("#clock");
ReactDOM.render(e(ClockComponent), domContainer);
