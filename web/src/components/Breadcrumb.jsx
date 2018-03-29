import React, { Component } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import breadcrumbStyle from "../css/breadcrumb.css";

class breadcrumb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={breadcrumbStyle.rim}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={`/`}>首页</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className={breadcrumbStyle.name}>{this.props.name}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default breadcrumb;
