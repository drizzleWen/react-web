import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import HeaderComponent from "./header";
import FooterComponent from "./Footer/footer";
import HelpDetailsSideComponent from "./helpDetailsSide";
import helpStyle from "../css/helpDetails.css";

class HelpDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://v2.apiqa.imart360.com/news/query/id/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          html: response.data.newsEntityList[0].content
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    axios
      .get(
        "http://v2.apiqa.imart360.com/news/query/id/" +
          nextProps.match.params.id
      )
      .then(response => {
        this.setState({
          html: response.data.newsEntityList[0].content
        });
      })
      .catch(err => {
        console.log(err);
      });
    if (this.props.location !== nextProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <div style={{ width: "1152px", margin: "0 auto" }}>
          <div className={helpStyle.local}>
            <Link to={`/`} className={helpStyle.a}>
              首页
            </Link>
            <i className={helpStyle.i}>></i>
            帮助中心
          </div>
          <div style={{ overflow: "hidden" }}>
            <HelpDetailsSideComponent />
            <div
              style={{ float: "right", width: "900px" }}
              dangerouslySetInnerHTML={{ __html: this.state.html }}
            />
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default HelpDetailsComponent;
