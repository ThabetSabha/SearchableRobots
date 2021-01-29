import { Dispatch } from "redux";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

export const setSearchField = (text: string): ISearchFieldAction => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobotsAction = (): any => (dispatch: Dispatch): void => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((err) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err.message })
    );
};
