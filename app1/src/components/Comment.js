import React from "react";
import UserInfo from "./UserInfo";
import CommentText from "./CommentText";
import CommentDate from "./CommentDate";

class Comment extends React.Component {
  render() {
    return (
      <div>
        <UserInfo user={this.props.data.user} />
        <CommentText text={this.props.data.text} />
        <CommentDate date={this.props.data.date} />
      </div>
    );
  }
}

export default Comment;
