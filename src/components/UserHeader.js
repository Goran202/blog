import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    const { user } = this.props;
    //console.log(user);
    console.log('Start-' + this.props.i);
    console.log(this.props.users);
    console.log(user);
    console.log('Stop-' + this.props.i);
    console.log('END!!!!!!!!!!!!!!!!!!!!!!!');
    console.log('-----------------------------');

    console.log('RENDERED' + this.props.i);

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('BEGIN!!!!!!!!!!!!!!!!!!!');
  console.log('START_state.users');
  console.log(state.users);
  console.log('stop_state.users');
  //console.log('count');

  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  {
    fetchUser: fetchUser,
  }
)(UserHeader);
