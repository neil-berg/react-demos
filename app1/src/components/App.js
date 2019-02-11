import React, { Component } from "react";
import Comment from "./Comment";
import CommentDate from "./CommentDate";

const data = {
  user: {
    name: "Neil Berg",
    avatarURL: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  text: "This is text for a social media post",
  date: new Date()
};

class App extends Component {
  render() {
    return <Comment data={data} />;
  }
}

export default App;
