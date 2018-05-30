import React from 'react';
import PropTypes from 'prop-types';
import ReviewForm from '../ReviewForm';

export default function ReviewSection({ movie, actions }) {
  return (
    <div className="movie-page_review-section">
      <h2 className="review-section_title">What did you think?</h2>
      <div className="img-test" />
      <ReviewForm movie={movie} actions={actions} />
    </div>
  );
}

ReviewSection.propTypes = {
  movie: PropTypes.object,
  actions: PropTypes.object.isRequired
};
