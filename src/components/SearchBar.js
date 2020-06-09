import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  function inputChange(e) {
    setTerm(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    // TODO: make sure we call callback from parent component
  }
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => onFormSubmit(e)}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={(e) => inputChange(e)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
