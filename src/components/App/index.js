import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { FETCH_USER, TOGGLE_IS_FETCHING } from "../../actions/userActions";
import SearchUser from "../SearchUser";
import UserDetail from "../UserDetail";
import { getUserDetail, getIsFetching } from "../../selectors/userSelector";
import PropTypes from "prop-types";

class App extends PureComponent {
  state = {
    username: ""
  };

  handleUsernameChange = username => this.setState({ username });

  handleSearch = () => {
    const { fetchUser, toggleIsFetching } = this.props;
    const { username } = this.state;
    toggleIsFetching();
    fetchUser(username);
    this.setState({ username: "" });
  };

  render() {
    const { userDetail, isFetching } = this.props;
    const { username } = this.state;
    return (
      <div className="app subtle-shadow-transition">
        <SearchUser
          isFetching={isFetching}
          handleUsernameChange={this.handleUsernameChange}
          handleSearch={this.handleSearch}
          username={username}
        />
        <UserDetail isFetching={isFetching} user={userDetail} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetail: getUserDetail(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  fetchUser: payload => ({ type: FETCH_USER, payload }),
  toggleIsFetching: () => ({ type: TOGGLE_IS_FETCHING })
};

App.propTypes = {
  userDetail: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchUser: PropTypes.func.isRequired,
  toggleIsFetching: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
