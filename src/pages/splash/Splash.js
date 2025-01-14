import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div
        className="screen"
        style={{ backgroundColor: props.theme.splashBg }}
      ></div>
      <div id="logo" theme={props.theme}>
        <div className="dyk-container">
          <div className="vertical-line"></div>
          <div className="dyk-text">DYK</div>
          <div className="vertical-line"></div>
        </div>
        <div className="logo-text">Daeyeop Kim</div>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
