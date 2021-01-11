import React from "react";

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const Searchbox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <>
      <input
        className="pa3 ma4 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        aria-label="search Robots"
        onChange={searchChange}
      ></input>
    </>
  );
};

export default Searchbox;
