import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {addPost, fetchPosts} from "../../store/actions/posts";
import PostList from "../../components/PostList/PostList";


class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
  }

  render () {
    return(
      <Fragment>
        <PageHeader>
          <p>
            Posts
          </p>
        </PageHeader>
        {this.props.posts.map(post => (
          <PostList
            key={post._id}
            id={post._id}
            title={post.title}
            description={post.description}
            image={post.image}
            user={post.user.username}
            click={() => this.props.addPost(post._id, this.props.user.token)}
          />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    user: state.users.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: (id) => dispatch(fetchPosts(id)),
    addPost: (post, token) => dispatch(addPost(post, token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);


