import React from "react";
import PropTypes from "prop-types";

const UserInfoItem = ({ iconSrc, label, value }) => {
  return (
    <div className="user-info-item-wrapper">
      <img alt="" className="user-info-item-icon" src={iconSrc} />
      <div className="user-info-item-text-wrapper">
        <span className="user-info-item-label">{label}</span>
        <span className="user-info-item-value">
          {value ? value : `${label} is not available`}
        </span>
      </div>
    </div>
  );
};

UserInfoItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default UserInfoItem;
