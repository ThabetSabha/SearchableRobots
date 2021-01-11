//Robots array we get from fetching
interface IRobot {
  id: number;
  name: string;
  email: string;
}

//Action dispatched when SearchInput Changes
interface ISearchFieldAction {
  type: string;
  payload: string;
}

//Actions dispatched When Fetching Robots
interface IRequestRobotsAction {
  type: string;
  payload?: Array<IRobot> | string;
}

//IntialState for SearchField Reducer
interface ISearchState {
  searchField: string;
}

//IntialState for FetchingRobots Reducer
interface IFetchRobotsState {
  isPending: boolean;
  robots: Array<IRobot>;
  error: "";
}
