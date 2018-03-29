import React, { Component } from "react";

import collaborateIndex from "./collaborateIndex";
import { Link } from "react-router-dom";

class collaborate extends Component {
  render() {
    return (
      <div>
        <div>
          <div>合作伙伴</div>
          <div>
            <ul>
              <li>
                <i />
                <Link to="/Distributor">分销商政策</Link>
              </li>
              <li>
                <Link to="/Distributor/Words">分销商感言</Link>
              </li>
              <li>
                <Link to="/Distributor/AuthDistributor">授权经销商</Link>
              </li>
              <li>
                <Link to="/Distributor/Join">我要合作</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default collaborate;
