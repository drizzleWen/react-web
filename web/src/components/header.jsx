import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";
import { Input } from "antd";
import { Link } from "react-router-dom";
import headerBanner from "../images/top_yc.png";

import headerStyle from "../css/header.css";
import "../antd/header.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "道康宁",
        "安全鞋",
        "道康宁",
        "安全鞋",
        "有机硅密",
        "耳塞",
        "角磨机",
        "钻头",
        "瞬干胶",
        "摩力克",
        "口罩",
        "田岛工具"
      ],
      goods: ["字典", "耳塞", "雨伞"],
      current: "mail",
      isClose: false
    };
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  handleClose = () => {
    this.setState({
      isClose: true
    });
  };

  render() {
    return (
      <div className={headerStyle.header}>
        <div className={headerStyle.headerTop}>
          <div className={headerStyle.w}>
            <ul className={headerStyle.headerTopL}>
              <li>
                <Link to={`/`} className={headerStyle.a}>
                  {" "}
                  您好！
                </Link>
                <a href="/">{/* 您好！ */}</a>
              </li>
              <li>
                <Link to={`/login`} className={headerStyle.a}>
                  {" "}
                  管理员
                </Link>
              </li>
              <li>
                <Link to={`/`} className={headerStyle.a}>
                  退出
                </Link>
              </li>
            </ul>
            <ul className={headerStyle.headerTopR}>
              <li className={headerStyle.myZkhLi}>
                <Link to={`/`} className={headerStyle.a}>
                  我的震坤行<i />
                </Link>
                <ul className={headerStyle.myZkhLiUl}>
                  <li>
                    <Link to="/">我的订单</Link>
                  </li>
                  <li>
                    <Link to="/">我的询价单</Link>
                  </li>
                  <li>
                    <Link to="/">我的收藏</Link>
                  </li>
                  <li>
                    <Link to="/">我的咨询</Link>
                  </li>
                  <li>
                    <Link to="/">我的礼品车</Link>
                  </li>
                  <li>
                    <Link to="/">我的礼品单</Link>
                  </li>
                </ul>
                {/* <Dropdown overlay={myZkh}>
                  <Link to={`/`} className={headerStyle.a}>
                    我的震坤行<i />
                  </Link>
                </Dropdown> */}
              </li>
              <li className={headerStyle.helpLi}>
                <Link to={`/`} className={headerStyle.a}>
                  {" "}
                  帮助中心<i />
                </Link>
                <ul className={headerStyle.helpLiUl}>
                  <li>
                    <Link to="/help/16">会员注册</Link>
                  </li>
                  <li>
                    <Link to="/">忘记密码</Link>
                  </li>
                  <li>
                    <Link to="/">交易流程</Link>
                  </li>
                  <li>
                    <Link to="/">配送方式</Link>
                  </li>
                  <li>
                    <Link to="/">售后服务</Link>
                  </li>
                  <li>
                    <Link to="/">联系我们</Link>
                  </li>
                  <li>
                    <Link to="/">积分说明</Link>
                  </li>
                  <li>
                    <Link to="/">如何换礼</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/`} className={headerStyle.a}>
                  {" "}
                  企业服务平台{" "}
                </Link>
              </li>
              <li>
                <Link to={`/`} className={headerStyle.a}>
                  {" "}
                  智能小仓库{" "}
                </Link>
              </li>
              <li className={headerStyle.postage}>
                <Link to={`/`} className={headerStyle.a}>
                  <img src="../images/new_png_03.png" alt="" /> 全场包邮
                </Link>
              </li>
              <li className={`${headerStyle.postage} ${headerStyle.telLi}`}>
                <Link to={`/`} className={headerStyle.a}>
                  <img src="../images/new_png_03.png" alt="" />400-680-9696
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {!this.state.isClose ? (
          <div className={`${headerStyle.headerBanner} ${headerStyle.w}`}>
            <img src={headerBanner} alt="" />
            <i onClick={this.handleClose} />
          </div>
        ) : (
          ""
        )}
        <div className={`${headerStyle.headerMid} ${headerStyle.w}`}>
          <div className={headerStyle.log}>
            <Link to={`/`} className={headerStyle.a}>
              <img src="" alt="" />
            </Link>
          </div>
          <div className={headerStyle.search}>
            <Search
              placeholder="请输入产品名称 品牌 型号 sku号，享受极致搜索体验"
              enterButton="搜索"
              size="large"
            />
            <div className={headerStyle.searchTerm}>
              <span>热门搜索：</span>
              <ul>
                {this.state.words.map((word, i) => {
                  return (
                    <li key={i}>
                      <Link to={`/`} className={headerStyle.a}>
                        {word}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={headerStyle.shoppingCar}>
            <div className={headerStyle.car}>
              <Link to={`/`} className={headerStyle.a}>
                我的购物车
              </Link>
              <span className={headerStyle.goodsNum}>10</span>
            </div>
            <div className={headerStyle.carDetail}>
              <div className={headerStyle.coverLine} />
              {this.state.goods.length ? (
                <ul>
                  {this.state.goods.map((good, i) => {
                    return (
                      <li key={i}>
                        <Link to={`/`} className={headerStyle.a}>
                          {good}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div>
                  <em />您的购物车是空的
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={`${headerStyle.headerBom} ${headerStyle.w}`}>
          <div className={headerStyle.menuWrap}>
            <ul>
              <li className={headerStyle.productTypeTitle}>
                <Icon type="menu-fold" /> <Link to={`/`}>产品分类</Link>
              </li>
              <li>
                <Link to={`/`}>首页</Link>
              </li>
              <li>
                <Link to={`/`}> 品牌专区</Link>
              </li>
              <li>
                <Link to={`/`}> 积分商城</Link>
              </li>
              <li>
                <Link to={`/`}>区域服务中心 </Link>
              </li>
              <li className={headerStyle.partner}>
                <Link to={`/`}> 合作伙伴专区</Link>
                <ul className={headerStyle.partnerDrop}>
                  <li>
                    <Link to={`/Distributor`}>分销商直通车</Link>
                  </li>
                  <li>
                    <Link to={`/`}>授权经销商</Link>
                  </li>
                  <li>
                    <Link to={`/`}>供应商直通车</Link>
                  </li>
                  <li>
                    <Link to={`/`}>区域分销合作</Link>
                  </li>
                </ul>
              </li>
              <li className={headerStyle.techCenter}>
                <Link to={`/`}>技术中心</Link>
                <ul className={headerStyle.techCenterDrop}>
                  <li>
                    <Link to={`/`}>行业解决方案</Link>
                  </li>
                  <li>
                    <Link to={`/`}>技术资料下载</Link>
                  </li>
                </ul>
              </li>
              <li className={headerStyle.aboutZkh}>
                <Link to={`/`}> 关于震坤行</Link>
                <ul className={headerStyle.aboutZkhDrop}>
                  <li>
                    <Link to={`/`}>公司简介</Link>
                  </li>
                  <li>
                    <Link to={`/`}>公司新闻</Link>
                  </li>
                  <li>
                    <Link to={`/`}>公司月刊</Link>
                  </li>
                  <li>
                    <Link to={`/`}>联系我们</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
