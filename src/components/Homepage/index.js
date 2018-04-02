import MovieList from '../MovieList';
import React, {PropTypes} from 'react';
import ProgressBar from './ProgressBar';
import * as movielistActions from '../../actions/movielistActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>A place to tick off Oscar best picture winners as I watch them.</h1>
        <ProgressBar progress={24} />
        <MovieList actions={this.props.actions} movies={this.props.movies}/>
      </div>
    );
  }
}

Homepage.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(movielistActions, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
