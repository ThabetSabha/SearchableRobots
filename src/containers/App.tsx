import React, { useEffect } from "react";
import CardList from "../components/CardList/CardList";
import Searchbox from "../components/SearchBox/Searchbox";
import "./App.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { requestRobotsAction, setSearchField } from "../redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobotsAction());
  }, [dispatch]);

  const onSearchChange = (event: React.SyntheticEvent): void => {
    const element = event.target as HTMLInputElement;
    dispatch(setSearchField(element.value));
  };

  const searchField = useSelector(
    (state: RootStateOrAny) => state.searchRobots.searchField
  );
  const robots = useSelector(
    (state: RootStateOrAny) => state.requestRobotsReducer.robots
  );
  const isPending = useSelector(
    (state: RootStateOrAny) => state.requestRobotsReducer.isPending
  );

  const filtered = robots.filter((robot: IRobot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc main">
      <h1 className="ma2 f1 ">RoboFriends</h1>
      <Searchbox searchChange={onSearchChange} />
      <div
        style={{
          overflowY: "scroll",
          height: "500px",
          border: "2px solid grey",
        }}
      >
        {isPending ? (
          <h1 className="ma2 f1 ">Loading..</h1>
        ) : (
          <CardList robots={filtered} />
        )}
      </div>
    </div>
  );
};

export default App;
