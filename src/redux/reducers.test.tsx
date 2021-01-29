import * as reducers from "./reducers";
import * as types from "./constants";

const initialStateSearch: ISearchState = {
  searchField: "",
};

const uselessAction: ISearchFieldAction = { type: "", payload: "" };

describe("searchRobots reducer", () => {
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, uselessAction)).toEqual({
      searchField: "",
    });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: types.CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

const initialStateRobots: IFetchRobotsState = {
  robots: [],
  isPending: false,
  error: "",
};

describe("requestRobots reducer", () => {
  it("should return the initial state", () => {
    expect(reducers.requestRobotsReducer(undefined, uselessAction)).toEqual({
      robots: [],
      isPending: false,
      error: "",
    });
  });

  it("should handle REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: types.REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: "",
    });
  });
  it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 123,
            name: "test",
            email: "j@jmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 123,
          name: "test",
          email: "j@jmail.com",
        },
      ],
      isPending: false,
      error: "",
    });
  });
  it("should handle REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobotsReducer(initialStateRobots, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: "NOOO",
      })
    ).toEqual({
      error: "NOOO",
      robots: [],
      isPending: false,
    });
  });
});
