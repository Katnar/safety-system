import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

class Comment extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    return (
      <ReactDisqusComments
        shortname="example"
        identifier="something-unique-12345"
        title="tene forum"
        url="http://www.example.com/example-thread"
        category_id="123456"
        onNewComment={this.handleNewComment}/>
    );
  }
}

export default Comment;