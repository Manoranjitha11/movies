// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './nav.css';

const stateMap = store => ({
});


class NavBar extends Component {
  render() {
    return (
      <div className="headBar">
           <div className="title">
              {this.props.title.toLowerCase() !== "pop movies" ? <span className="d-inline-block" onClick={this.props.backPage}><i className="fa fa-arrow-left backIcon" ></i></span> : '' }
                {this.props.title}
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-ellipsis-v backIcon" aria-hidden="true"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="dropdown-item" onClick={this.props.favList}>My Favourites</div>
              </div>
            </div>
      </div>
    );
  }
}

export default connect(stateMap)(NavBar);
