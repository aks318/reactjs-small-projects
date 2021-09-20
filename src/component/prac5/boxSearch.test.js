import { getAllByRole, getAllByTestId, render , screen  } from "@testing-library/react";
import BoxSearch from "./BoxSearch";
import userEvent from "@testing-library/user-event"

test('Initial rendering', () => {
    render(<BoxSearch />)
    const search = screen.getByRole('textbox')
    expect(search).toHaveAttribute('placeholder')

    const parentDiv = screen.getByTestId('test-id')
    expect(parentDiv).toHaveStyle({display : 'flex'})
})


test('Check child div is rendering', () => {
    render(<BoxSearch />)
    const childDiv = screen.getAllByTestId("child-test-id")
    expect(childDiv).toHaveLength(9)

    // checking red div is rendering
    const search = screen.getByRole('textbox')
    userEvent.type(search , 'red')
    expect(screen.getAllByTestId("child-test-id")[0]).toHaveStyle({backgroundColor : 'red'})
})
