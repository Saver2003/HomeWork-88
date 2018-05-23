import React, {Component, Fragment} from 'react';
import {Button, Form, PageHeader} from "react-bootstrap";
import OnePost from '../../components/OnePost/OnePost'
import {addComments, fetchComments, fetchOnePost} from "../../store/actions/posts";
import {connect} from "react-redux";
import FormElement from "../../components/UI/Form/FormElements";
import Comments from "../../components/Comments/Comments";

class OnePostView extends Component {
  state = {
    comment: ''
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();
    this.props.addComments({post: this.props.post._id, comment: this.state.comment});
  };

  componentDidMount() {
    this.props.fetchOnePost(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }

  render() {
    console.log('>>>', this.props.comment);
    if (!this.props.post) {
      return <div>Loading...</div>
    }
    return (
      <Fragment>
        <PageHeader>
          <p>
            Posts
          </p>
        </PageHeader>
        <OnePost
          key={this.props.post._id}
          id={this.props.post._id}
          title={this.props.post.title}
          description={this.props.post.description}
          image={this.props.post.image}
          user={this.props.post.user.username}
          dateTime={this.props.post.dateTime}
        />
        <Form horizontal onSubmit={this.submitFormHandler}>

          <FormElement
            propertyName="comment"
            title="Enter comment"
            type="text"
            value={this.state.comment}
            changeHandler={this.inputChangeHandler}
          />
          <Button type='submit' style={{float: 'right', marginRight: '50px', marginBottom: "70px"}}><strong>Add comment</strong></Button>

        </Form>

        {this.props.comment.map(comment => (
          <Comments
            key={comment._id}
            id={comment._id}
            comment={comment.comment}
            user={comment.user.username}
            dateTime={comment.dateTime}
          />
        ))}

      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    user: state.users.user,
    post: state.posts.post,
    comment: state.posts.comments,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOnePost: (id) => dispatch(fetchOnePost(id)),
    addComments: (data) => dispatch(addComments(data)),
    fetchComments: (id) => dispatch(fetchComments(id))

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(OnePostView);