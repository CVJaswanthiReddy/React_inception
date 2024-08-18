import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
        avatar_url: "DUMMY",
        bio: "Frontend Developer",
        followers: 0,
        following: 0,
        public_repos: 0,
      },
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.github.com/users/CVJaswanthiReddy"
      );
      const json = await response.json();
      this.setState({ userInfo: json });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  render() {
    const { userInfo } = this.state;

    return (
      <div className="container mx-auto p-5 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
          <div className="flex justify-between items-stretch space-x-6">
            {/* About Me Section */}
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h1 className="text-3xl font-bold mb-8 text-center">About Me</h1>
              <div className="flex flex-col items-center flex-grow">
                <img
                  src={userInfo.avatar_url}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {userInfo.name}
                </h2>
                <p className="text-center">{userInfo.bio}</p>
                <p className="text-center text-sm text-gray-500">
                  Location: {userInfo.location}
                </p>
              </div>
            </div>

            {/* Backend Development & Problem-Solving Section */}
            <div className="w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Backend Developer & Problem-Solving Skills
              </h2>
              <p className="text-xl text-center mb-4 flex-grow">
                I am proficient in backend development, including technologies
                such as
                <span className="text-orange-500">
                  {" "}
                  Node.js, Express, MongoDB, and MySQL
                </span>
                . I build scalable and efficient server-side applications and
                manage databases effectively. Along with my backend expertise, I
                am also passionate about solving complex problems through{" "}
                <span className="text-orange-500">
                  Data Structures and Algorithms
                </span>
                . I enjoy optimizing solutions and continuously improving my
                skills in this area.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileClass;
