import React from 'react'
import Logo from '../components/Logo'
import renderer from 'react-test-renderer'

const classlogo = "sampleClass"
const srcImg = "https://img.icons8.com/search"


it("Renders the Logo correctly with no props ", () => {
    const tree = renderer
        .create(<Logo/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
it("Renders the Logo correctly with test props", () => {

    const tree = renderer
        .create(<Logo classlogo={classlogo}
            srcImg={srcImg} ></Logo>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})