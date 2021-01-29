import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);
describe("Testing App component", () => {
    test("That the App Component Renders", () => {
        const store = mockStore({
          searchRobots: {
            searchField: "",
          },
          requestRobotsReducer: {
              isPending: false,
              robots: [],
              error: "",
          },
        });
      
        const wrapper = mount(
          <Provider store={store}>
            <App />
          </Provider>
        );
        expect(wrapper).toMatchSnapshot();
      });
    
})
