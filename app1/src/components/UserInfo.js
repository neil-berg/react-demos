import React from "react";

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.user.name}</h3>
        <img src={this.props.user.avatarURL} alt={this.props.user.name} />
      </div>
    );
  }
}

export default UserInfo;
