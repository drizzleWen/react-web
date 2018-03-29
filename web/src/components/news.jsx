import React, { Component } from "react";
import findproduct from "../images/findpro.png";
import freeReg from "../images/index_zhuce.png";
import quickOrder from "../images/index_dinghuo.png";
import newsCode from "../images/sy_erweima.png";
import { Link } from "react-router-dom";
import axios from "axios";

import newsStyle from "../css/news.css";

class NewsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNews: "tab-news",
      inews: []
    };
  }
  componentWillMount() {
    axios.get('http://v2.apiqa.imart360.com/news/query/home')
    .then((res) => {
      this.setState({
        inews: res.data.newsEntityList
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  newsFocus(i, e) {
    this.setState({
      currentNews: i
    });
  }

  render() {
    return (
      <div className={newsStyle.news}>
        <div className={newsStyle.sming}>
          <Link className={newsStyle.findproduct} to="/">
            <img src={findproduct} alt="" />
            <div className={newsStyle.findpro}>帮您找货</div>
          </Link>
          <Link className={`${newsStyle.findproduct} ${newsStyle.frereg}`} to="/">
            <img src={freeReg} alt="" />
            <div className={newsStyle.findpro}>免费注册</div>
          </Link>
          <Link className={`${newsStyle.findproduct} ${newsStyle.frereg}`} to="/">
            <img src={quickOrder} alt="" />
            <div className={newsStyle.findpro}>快速订货</div>
          </Link>
        </div>
        <div className={newsStyle.inews}>
          <ul className={newsStyle.inewsT}>
            <li
              onMouseOver={this.newsFocus.bind(this, "tab-news")}
              key="tab-news"
              className={
                this.state.currentNews === "tab-news"
                  ? `${newsStyle.inewsTL} ${newsStyle.inewsBackground}`
                  : `${newsStyle.inewsTL}`
              }
            >
              新闻中心
            </li>
            <li
              onMouseOver={this.newsFocus.bind(this, "tab-tec")}
              key="tab-tec"
              className={this.state.currentNews === "tab-tec" ? `${newsStyle.inewsBackground}` : ""}
            >
              技术咨询
            </li>
          </ul>
          <div className={newsStyle.newsDetail}>
            {this.state.currentNews === "tab-news" ? (
              <ul className={newsStyle.inewsB}>
                {this.state.inews.map((news, i) => {
                  return <li key={i}><Link to="/" className={newsStyle.a}>{news.title}</Link> </li>;
                })}
              </ul>
            ) : (
              <img className={newsStyle.inewsCode} src={newsCode} alt="" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
