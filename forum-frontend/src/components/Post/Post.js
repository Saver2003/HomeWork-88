import React from 'react';
import PropTypes from 'prop-types';

import {Button, Panel} from "react-bootstrap";

const Post = props => {
  return(
    <Panel>
      <Panel.Body>
        <p>{props.title} <strong>{props.user}</strong></p>
        <p>{props.description}</p>

      </Panel.Body>
    </Panel>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Post;