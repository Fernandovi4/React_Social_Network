import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  unfollow,
  getUsersList,
  setUsers,
  toogleFollowingProgress,
  followUser,
  unfollowUser
} from '../../../redux/users-reduser';

import UsersFuncComponent from './UsersFuncComponent';
import Loader from '../../shared/Loader/Loader';
import {WithAuthRedirect} from '../../../HighOrderComponents/WithAuthRedirect';
import {compose} from 'redux';

class UsersClassComponent extends React.Component {

  componentDidMount() {
    this.props.getUsersList(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (page) => {

    this.props.getUsersList(page, this.props.pageSize)
  }

  render() {

    return (
      <>
        {this.props.isFetchingData ?
          <Loader/> :
          <UsersFuncComponent
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            onPageChange={this.onPageChange}
            followingInProgress={this.props.followingInProgress}
            toogleFollowingProgress={this.props.toogleFollowingProgress}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetchingData: state.usersPage.isFetchingData,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  connect(mapStateToProps, {
    follow, unfollow,
    getUsersList, setUsers,
    followUser, unfollowUser,
    toogleFollowingProgress
  }),
  WithAuthRedirect
)(UsersClassComponent)