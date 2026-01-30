import "./Search.css";

function Search() {
  return (
    <div className="search-wrapper">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Article No ..."
        />
        <span className="search-icon">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#74C0FC" }}
          ></i>
        </span>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Product ..."
        />
        <span className="search-icon">
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#74C0FC" }}
          ></i>
        </span>
      </div>
    </div>
  );
}

export default Search;
