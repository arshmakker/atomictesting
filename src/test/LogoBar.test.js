import React from 'react'
import LogoBar from '../components/LogoBar'
import renderer from 'react-test-renderer'

const logoText = "This is my turf"


it("Renders the Logo Bar correctly with no props ", () => {
    const tree = renderer
        .create(<LogoBar/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
it("Renders the Logo Bar correctly with test props", () => {

    const tree = renderer
        .create(<LogoBar logoText={logoText}
             ></LogoBar>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})