import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";

test("That the Card Component Renders", () => {
  let cardListProps: CardListProps = {
    robots: [{ id: 1, name: "Test", email: "Test@gmail.com" }],
  };

  let wrapper = shallow(<CardList {...cardListProps} />);
  expect(wrapper).toMatchSnapshot();
});
