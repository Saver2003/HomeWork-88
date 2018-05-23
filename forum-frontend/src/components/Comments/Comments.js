import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Comments = props => {
  return (
    <div style={{margin: "50px 0 0 200px"}}>
      <p style={{display: "block"}}>
        <Moment format="YYYY-MM-DD HH:mm">
          {props.dateTime}
        </Moment>
        <strong style={{padding: "0 20px"}}>
          {props.user}
        </strong>
        {props.comment}
      </p>
    </div>
  )
};

Comments.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  dateTime: PropTypes.string
};

export default Comments;