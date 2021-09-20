import { render , screen  } from "@testing-library/react";
import BoxSearch from "./BoxSearch";

test('Initial rendering', () => {
    render(<BoxSearch />)
    const search = screen.getByRole('textbox')
    expect(search).toHaveAttribute('placeholder')

    const parentDiv = screen.getByTestId('test-id')
    expect(parentDiv).toHaveStyle({display : 'flex'})
})


test('Check red div is rendering', () => {
    render(<BoxSearch />)
    const childDiv = screen.getAllByTestId("child-test-id")
    expect(childDiv).toHaveLength(9)
})
