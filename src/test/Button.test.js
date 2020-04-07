import React from 'react'
import Button from '../components/Button'
import renderer from 'react-test-renderer'

const classButton = "sampleClass"
const title = "Sample Title"


it("Renders the Button correctly with no props ", () => {
    const tree = renderer
        .create(<Button/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
it("Renders the Button correctly with test props", () => {

    const tree = renderer
        .create(<Button classButton={classButton}
            title={title} ></Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})