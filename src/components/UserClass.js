import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      profile: {
        name: "dummy",
        location: "default",
      },
    };
    // console.log(this.props.name + "constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "componentDidMount");
    const data = await fetch("https://api.github.com/users/razak7860");
    const json = await data.json();
    this.setState({
      //updating phase
      profile: json,
    });
  }
  componentWillUnmount() {
    //when we navigate to other page this is as an example
    console.log("Your component is unmounted");
  }
  render() {
    const { name, location } = this.state.profile;
    // console.log(name + "render");
    return (
      <div className="user-card">
        <h1>Count - {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name:- {name}</h2>
        <h2>Location:- {location}</h2>
      </div>
    );
  }
}
export default UserClass;
