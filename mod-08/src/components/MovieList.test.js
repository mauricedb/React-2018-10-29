import React from 'react'
import { shallow } from 'enzyme'

import MovieList from './MovieList'


test('can render ith an empty list', () => {


    const wrapper = shallow(<MovieList movies={[]} />)

    const title = wrapper.find('h1').text()
    expect(title).toBe('Movies')

})

