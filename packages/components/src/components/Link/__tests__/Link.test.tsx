import React from 'react'
import {Link} from '../Link'
import {render, screen} from  '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Link />', () => {
  
  test('Link has "variant" attribute when prop is passed', () => {
    const linkComponent = render(
      <Link data-testingid="linktest" href="/about" component='a'>Hello</Link>
    ).getByTestId('linktest')

    linkComponent
  })

})
