import React, { Component } from "react";

import { Carousel } from "antd";
import "../css/banner.css";

import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const styles = {
  bannerShell: {
    width: "660px",
    marginTop: "8px",
    float: "left"
  }
};

class BannerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: []
    };
  }

  componentWillMount() {
    axios
      .post("http://v2.apiqa.imart360.com/ad/query", {
        classId: 2,
        pageIndex: 1,
        pageSize: 88
      })
      .then(res => {
        this.setState({
          banner: res.data.adEntityList
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={styles.bannerShell}>
        <Carousel autoplay>
          {this.state.banner.map(function(item) {
            return (
              <div key={item.id}>
                <Link to={`/activity/${item.imgUrl.split("=")[1]}`}>
                  <img src={item.imgPath} alt="" />
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default BannerComponent;
