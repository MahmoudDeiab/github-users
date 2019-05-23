import React from "react";
import { PulseLoader } from "react-spinners";
import PropTypes from "prop-types";

const SearchUser = ({
  handleUsernameChange,
  handleSearch,
  username,
  isFetching
}) => {
  return (
    <div className="section-wrapper search-section-wrapper separator">
      <input
        className="username-input"
        placeholder="Enter Github username"
        value={username}
        onChange={event => handleUsernameChange(event.target.value)}
      />
      <button
        disabled={username === ""}
        onClick={handleSearch}
        className="cta-btn"
      >
        {isFetching ? (
          <PulseLoader sizeUnit={"px"} size={8} color={"#fff"} loading={true} />
        ) : (
          `Search`
        )}
      </button>
    </div>
  );
};

SearchUser.propTypes = {
  handleUsernameChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default SearchUser;
