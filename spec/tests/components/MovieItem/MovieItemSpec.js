import { shallow } from 'enzyme';
import MovieItem from '../../../../src/components/MovieItem';
import SeenSelect from '../../../../src/components/SeenSelect';
import React from 'react';
import { Link } from 'react-router-dom';

describe('MovieItem', () => {
  let props, wrapper, onClick, expectedProps;
  beforeEach(() => {
    onClick = () => {};
    props = {
      name: 'Wings',
      releaseYear: 1929,
      seen: false,
      onClick: onClick
    };
    expectedProps = {
      name: 'Wings',
      onClick: onClick,
      seen: false
    };
    wrapper = shallow(<MovieItem {...props} />);
  });
  it('SHOULD render a MovieItem', () => {
    expect(wrapper.find('.movie-list_movie-item').length).toEqual(1);
  });
  it('SHOULD pass correct props to SeenSelect', () => {
    expect(wrapper.find(SeenSelect).props()).toEqual(
      jasmine.objectContaining(expectedProps)
    );
  });
  it('SHOULD pass correct props to Link', () => {
    expect(wrapper.find(Link).props().to).toEqual('/movie/1929');
  });
  it('SHOULD pass correct picture title to the Link', () => {
    expect(
      wrapper
        .find(Link)
        .children()
        .text()
    ).toEqual('Wings');
  });
});
