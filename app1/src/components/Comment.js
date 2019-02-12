import React from "react";
import UserInfo from "./UserInfo";
import CommentText from "./CommentText";
import CommentDate from "./CommentDate";

class Comment extends React.Component {
  render() {
    const { user, text, date } = this.props.data;
    return (
      <div>
        {/* <UserInfo user={this.props.data.user} />
        <CommentText text={this.props.data.text} />
        <CommentDate date={this.props.data.date} /> */}
        <UserInfo user={user} />
        <CommentText text={text} />
        <CommentDate date={date} />
      </div>
    );
  }
}

export default Comment;
