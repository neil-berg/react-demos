import React from "react";

class CommentDate extends React.Component {
  render() {
    return <p>{this.props.date.toLocaleString()}</p>;
  }
}

export default CommentDate;
