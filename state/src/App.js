import "./App.css";
// import picss from "./jackson-david-iwwx0ZLYNIo-unsplash.jpg";
import React, { Component } from "react";

class App extends Component {
  state = {
    person: { fullName: "", bio: "", imgSrc: "", profession: "" },
    show: true,
    seconds: 0,
  };

  renderPerson = () => {
    this.setState({
      person: {
        fullName: "Sarah Usman",
        bio: "a writer",
        // imgSrc: { picss },
        profession: "Full Stack",
      },
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <div>
            <h2> {this.state.person.fullName}</h2>
            <h2>{this.state.person.bio}</h2>
            <h2>{this.state.person.profession}</h2>
            <div>
              <img src={this.state.person.imgSrc.picss} alt="hiii" />
            </div>
          </div>
        )}
        <button onClick={this.renderPerson}>click me</button>
        <p>This component was mounted {this.state.seconds}s ago</p>
      </div>
    );
  }
  time() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.time(), 1000);
  }
}

export default App;
