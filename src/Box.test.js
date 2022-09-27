import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

const testBoxComponent = '<Box color="red" width="200px" height="300px" data-testid="1" />'

it('renders Box component without crashing', ()=> {
    render(<Box />);
    render(testBoxComponent);
})

it('matches snapshot', ()=> {
    const { asFragment } = render(testBoxComponent);
    expect(asFragment()).toMatchSnapshot();
})
