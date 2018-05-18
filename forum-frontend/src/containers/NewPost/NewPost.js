import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Alert, Button, Col, ControlLabel, Form, FormControl, FormGroup, PageHeader} from "react-bootstrap";
import FormElement from "../../components/UI/Form/FormElements";
import {addPost} from "../../store/actions/posts";


class NewPost extends Component {
  state = {
    title: '',
    description: '',
    image: ''
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitFormHandler = event => {
    event.preventDefault();

    let formData = new FormData();

    formData.append('title', this.state.title);
    formData.append('description', this.state.description);
    formData.append('image', this.state.image);

    this.props.addPost(formData);
  };


  render() {
    return(
      <Fragment>
        <PageHeader>Create new post</PageHeader>
        <Form horizontal onSubmit={this.submitFormHandler}>
          {this.props.error &&
          <Alert bsStyle="danger">{this.props.error.error}></Alert>}
          <FormElement
            propertyName="title"
            title="Title"
            placeholder="Enter title"
            type="text"
            value={this.state.title}
            changeHandler={this.inputChangeHandler}
          />

          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" name="description" placeholder="textarea" onChange={this.inputChangeHandler} />
          </FormGroup>
          <Button type='submit' style={{float: 'right', marginRight: '50px'}}><strong>Add Post</strong></Button>

        </Form>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  addPost: (post, token) => dispatch(addPost(post, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);