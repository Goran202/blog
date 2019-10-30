import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderList() {
    console.log('count4');
    return this.props.posts.map((post, i) => {
      console.log(i + 'RENDER LIST');
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            {i === 30 || i === 77 || true ? (
              <UserHeader i={i} userId={post.userId} />
            ) : null}
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log('count3');
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  //console.log('count2');
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPost: fetchPost }
)(PostList);
