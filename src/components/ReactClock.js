import React from "react";
import Clock from "react-live-clock";
import moment from "moment";
import Header from "./Header";

export default class ReactClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysDate: false
    };
  }

  toggleSwitch = () => {
    this.setState(() => ({
      todaysDate: !this.state.todaysDate
    }));
  };

  render() {
    return (
      <div>
        <Header toggleSwitch={this.toggleSwitch} />
        <div className="content-container">
          <div className="date">
            {this.state.todaysDate
              ? moment().format("dddd, MMMM Do, YYYY")
              : ""}
          </div>

          <div className="container">
            <Clock
              className="clock"
              format={"hh:mm:ss a"}
              ticking={true}
              timezone={"Asia/Kolkata"}
            />
          </div>
        </div>
      </div>
    );
  }
}
