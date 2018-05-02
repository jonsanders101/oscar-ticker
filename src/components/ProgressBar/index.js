import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-completed"
        style={{
          flex: `0 1 ${props.progress}%`
        }}
      />
      <div className="progress-bar-remaining" />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};