import React from "react";
import UserInfoItem from "../UserInfoItem";
import { isEmpty } from "ramda";
import LocationIcon from "../../assets/icons/location.svg";
import CompanyIcon from "../../assets/icons/company.svg";
import BioIcon from "../../assets/icons/bio.svg";
import { PulseLoader } from "react-spinners";
import PhotoPlaceholderIcon from "../../assets/icons/no_photo.svg";
import PropTypes from "prop-types";

const UserDetail = ({ user, isFetching }) => {
  if (isFetching) {
    return (
      <div className="section-wrapper">
        <PulseLoader
          sizeUnit={"px"}
          size={10}
          color={"#002af4"}
          loading={true}
        />
      </div>
    );
  }
  if (isEmpty(user)) {
    return (
      <div className="section-wrapper">
        <p>No user info to display</p>
      </div>
    );
  }
  const { name, login, bio, company, location, avatar_url } = user;
  return (
    <div className="section-wrapper">
      <div>
        <img
          alt={name || login || ""}
          className="user-image"
          src={avatar_url ? avatar_url : PhotoPlaceholderIcon}
          onError={event => (event.target.src = PhotoPlaceholderIcon)}
        />
      </div>
      <div>
        <h2 className="user-name-label">{name}</h2>
        <h3 className="user-handle-label">
          {login ? `@${login.toLowerCase()}` : ""}
        </h3>
      </div>
      <div>
        <UserInfoItem label="Company" iconSrc={CompanyIcon} value={company} />
        <UserInfoItem
          label="Location"
          iconSrc={LocationIcon}
          value={location}
        />
        <UserInfoItem label="Bio" iconSrc={BioIcon} value={bio} />
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default UserDetail;
