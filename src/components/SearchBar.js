import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
