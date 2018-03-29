import React, { Component } from "react";

import { Link } from "react-router-dom";

import collaborateSideStyle from "../css/collaborateSide.css";

class collaborateSide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={collaborateSideStyle.warp}>
        <ul>
          {this.props.option.sideList.map(items => {
            return (
              <li key={items.name}>
                <Link to={items.path}>{items.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default collaborateSide;
