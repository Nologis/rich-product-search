import { shallow } from 'enzyme';
import * as React from 'react';
import RichProductSearch from '../../src/containers/RichProductSearch';

describe('RichProductSearch', () => {
  it.skip('Should render the RichProductSearch', () => {
    const component = shallow(<RichProductSearch apiKey={'123'}/>);
    expect(component.find('h1')).toHaveLength(1);
  });
});
