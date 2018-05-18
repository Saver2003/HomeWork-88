import React, {Component, Fragment} from 'react';
import {PageHeader} from "react-bootstrap";

import {connect} from "react-redux";
import {fetchPosts} from "../../store/actions/posts";
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

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);


