import React from "react";

const Searchbox = ({ searchChange }: SearchBoxProps) => {
  return (
    <>
      <input
        className="pa3 ma4 ba b--green bg-lightest-blue robots-search-input"
        type="search"
        placeholder="Search Robots"
        aria-label="search Robots"
        onChange={searchChange}
      ></input>
    </>
  );
};

export default Searchbox;
