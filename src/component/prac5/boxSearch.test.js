import { render , screen  } from "@testing-library/react";
import BoxSearch from "./BoxSearch";

test('Initial rendering', () => {
    render(<BoxSearch />)
    const search = screen.getByRole('textbox')
    expect(search).toHaveAttribute('placeholder')

    const parentDiv = screen.getByTestId('test-id')
    expect(parentDiv).toHaveStyle({display : 'flex'})
})
