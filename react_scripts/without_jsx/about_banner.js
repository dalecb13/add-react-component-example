/*
  Describes a general banner on a page
*/

"use strict";

const e = React.createElement;

class AboutBanner extends React.Component {
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
    return e("p", null, `${this.state.date.toLocaleTimeString()}`);
  }
}

const domContainer = document.querySelector(".about_banner");
ReactDOM.render(e(AboutBanner), domContainer);
