import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    //create state
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
        avatar_url: "DUMMY",
      },
    };
    console.log("child constructor" + this.props.name);
  }
  async componentDidMount() {
    //API CALL

    const data = await fetch("https://api.github.com/users/CVJaswanthiReddy");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("child componentDidMount" + this.props.name);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    const { count } = this.state;
    console.log("child render" + this.props.name);
    return (
      <div>
        <h1>Profile class component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>XYZ:{this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default Profile;

/**
 * child constructor
 * child render
 * child componentDidMount
 *
 * API CALL
 * setState
 * UPDATE DOM
 * render
 *
 *
 */
