import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

test("That the Card Component Renders", () => {
  let cardProps: CardProps = {
    id: 1,
    name: "Test",
    email: "test@gmail.com",
  };

  let wrapper = shallow(<Card {...cardProps} />);
  expect(wrapper).toMatchSnapshot();
});
