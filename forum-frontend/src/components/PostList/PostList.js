import React from 'react';
import PropTypes from 'prop-types';

import {Button, Panel} from "react-bootstrap";

const PostList = props => {
  return(
    <Panel>
      <Panel.Body>
        <p>
          {props.number}.<strong> {props.title}</strong> {props.duration}
          <Button onClick={props.click} style={{float: 'right', marginRight: '50px'}}><strong>Play</strong></Button>
        </p>

      </Panel.Body>
    </Panel>
  );
};

PostList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  user: PropTypes.string.isRequired
};

export default PostList;