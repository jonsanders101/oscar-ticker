import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../../../src/components/ProgressBar';

describe('ProgressBar', () => {
  it('should display progress to the correct level', () => {
    const wrapper = shallow(<ProgressBar progress={10} />);
    expect(wrapper.find('.progress-bar-completed').props().style.flex).toEqual(
      '0 1 10%'
    );
  });
});
