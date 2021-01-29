import React from "react";
import Searchbox from "./Searchbox";
import { shallow, ShallowWrapper } from "enzyme";

describe("<Searchbox/>", () => {
  let mockOnSearchChange: any;
  let searchboxProps: SearchBoxProps;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    mockOnSearchChange = jest.fn();
    searchboxProps = {
      searchChange: mockOnSearchChange,
    };

    wrapper = shallow(<Searchbox {...searchboxProps} />);
  });

  test("That the SearchBox Component Renders", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("that the onSearchChange function gets called on input change", () => {
    wrapper
      .find(".robots-search-input")
      .simulate("change", { target: { value: "test" } });
    expect(mockOnSearchChange).toHaveBeenCalledWith({
      target: { value: "test" },
    });
  });
});
