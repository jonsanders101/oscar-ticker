import MovieList from '../MovieList';
import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import BasePage from '../BasePage';
import SeenFilterPanel from '../SeenFilterPanel';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateProgress(movies) {
    return Math.floor(
      (movies.filter(movie => movie.seen).length / movies.length) * 100
    );
  }

  render() {
    const { isLoading, movies } = this.props;
    return (
      <BasePage>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="homepage">
            <div className="homepage__heading-section">
              <h1 className="homepage__heading">
                There are 91 movies which have won the Oscar for Best Picture.
              </h1>
              <h2>How many have you seen?</h2>
              <ProgressBar progress={this.calculateProgress(movies)} />
            </div>
            <div className="homepage__widgets">
              <SeenFilterPanel />
            </div>
            <MovieList movies={movies} />
          </div>
        )}
      </BasePage>
    );
  }
}

Homepage.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.ajaxCalls > 0,
    movies: state.movies
  };
};

export default connect(mapStateToProps)(Homepage);
