import React, { Component } from "react";

import axios from "axios";

//引入首页组件
import HeaderComponent from "./header";
import BannerComponent from "./banner";
import CatalogComponent from "./catalog";
import NewsComponent from "./news";
import BrandComponent from "./brand";
import FooterComponent from "./Footer/footer";

class HomeComponent extends Component {
  componentDidMount() {
    axios
      .get("/api/demo/auth")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <div style={{ width: "1152px", margin: "0 auto", overflow: "hidden" }}>
          <CatalogComponent />
          <NewsComponent />
          <BannerComponent />
          <BrandComponent />
        </div>

        <FooterComponent />
      </div>
    );
  }
}

export default HomeComponent;
