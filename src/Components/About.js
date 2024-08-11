import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent-constructor");
  }
  async componentDidMount() {
    //BEST PLACE TO MAKE AN API CALL

    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent- render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the react live course chapter-07 finding the path</p>
        <Profile name={"first child"} xyz="abc" />
      </div>
    );
  }
}
export default About;
