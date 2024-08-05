import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchParams.get("q"));
  };
  return (
    <>
      <div>Search</div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />

        <button type="submit">Search</button>
        <button type="button" onClick={() => setSearchParams()}>
          Reset
        </button>
      </form>
    </>
  );
}

export default Search;
