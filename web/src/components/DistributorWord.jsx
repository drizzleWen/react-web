import React, { Component } from "react";
import HeaderComponent from "./header";
import Breadcrumb from "./Breadcrumb";
import CollaborateSide from "./collaborateSide";
import Footer from "./Footer/footer";

import distributorWordStyle from "../css/distributorWord.css";

const styles = {
  inner: {
    width: "1152px",
    margin: "0 auto"
  },
  index: {
    width: "1152px",
    margin: "0 auto",
    overflow: "hidden"
  },
  nav: {
    width: "238px",
    border: "1px solid #e2e2e2",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "40px",
    borderBottom: "none"
  }
};

class distributorWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideList: [
        {
          name: "分销商政策",
          path: "/Distributor"
        },
        {
          name: "分销商感言",
          path: "/Distributor/word"
        },
        {
          name: "授权经销商",
          path: "/Distributor/AuthDistributor"
        },
        {
          name: "我要合作",
          path: "/Distributor/Join"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <div style={styles.inner}>
          <Breadcrumb name={`合作伙伴专区`} />
        </div>
        <div style={styles.index}>
          <div style={{ float: "left", marginTop: "15px" }}>
            <div style={styles.nav}>合作伙伴</div>
            <CollaborateSide option={this.state} />
          </div>
          <div className={distributorWordStyle.right}>
            <div className={distributorWordStyle.fxWord}>
              <h3>分销商感言</h3>
            </div>
            <div className={distributorWordStyle.fxBanner}>
              <img src="http://resources.imart360.com/app/dist/images/n_banner_1.jpg" />
            </div>
            <div className={distributorWordStyle.fxTitle}>
              <span>震坤行分销商感言</span>
            </div>
            <div className={distributorWordStyle.fxContent}>
              <ul>
                <li>
                  <div className={distributorWordStyle.fxImg}>
                    <img src="http://resources.imart360.com/app/dist/images/fx_01.jpg" />
                  </div>
                  <div className={distributorWordStyle.fxT}>
                    <h3>尹维</h3>
                    <i>总经理</i>
                    <span>苏州千润慧五金机电设备有限公司</span>
                  </div>
                  <div className={distributorWordStyle.fxC}>
                    和震坤行合作了将近10年，全部正品和贴心服务，是我选择震坤行的理由。
                  </div>
                </li>
                <li>
                  <div className={distributorWordStyle.fxImg}>
                    <img src="http://resources.imart360.com/app/dist/images/fx_02.jpg" />
                  </div>
                  <div className={distributorWordStyle.fxT}>
                    <h3>刘小姐</h3>
                    <i>采购</i>
                    <span>苏州高乐电子有限公司</span>
                  </div>
                  <div className={distributorWordStyle.fxC}>
                    比较过很多类似的供货方，震坤行给的价格非常有优势。而且，仓储以及物流方面都很出众，我采购的产品一般都能有现货，这点我很满意。
                  </div>
                </li>
                <li>
                  <div className={distributorWordStyle.fxImg}>
                    <img src="http://resources.imart360.com/app/dist/images/fx_03.jpg" />
                  </div>
                  <div className={distributorWordStyle.fxT}>
                    <h3>上官芷若</h3>
                    <i>采购</i>
                    <span>深圳市浦莱达科技有限公司</span>
                  </div>
                  <div className={distributorWordStyle.fxC}>
                    以前我只是按照客户要求被动的来采购产品，而震坤行会根据市场现状和产品情况。提醒我很多以前没有注意的地方，服务很用心很不错。
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default distributorWord;
