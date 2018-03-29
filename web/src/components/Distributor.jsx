import React, { Component } from "react";

import Header from "./header";
import Breadcrumb from "./Breadcrumb";
import CollaborateIndex from "./collaborateIndex";
import CollaborateSide from "./collaborateSide";
import Footer from "./Footer/footer";

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

class Distributor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "分销商政策",
      content:
        "震坤行工业超市本着开放共享的合作发展理念，致力于打造高效高价值的工业品行业生态圈。依托于震坤行工业超市所积累的平台资源优势，我们真诚欢迎全国各地的分销商伙伴一起在工业品领域合作共赢共谋发展大计！",
      advantage: [
        {
          title: "价格优势",
          content:
            "震坤行充分理解分销商伙伴面临的市场挑战，我们愿意与您分享基于集中采购机制而获得的优惠价格，震坤行将提供给您远低于普通终端客户的产品价格，以协助您提高市场竞争力。"
        },
        {
          title: "海量渠道",
          content:
            "1998年成立以来，震坤行与数百家国际国内知名品牌建立了良好的合作关系，仅在2013年 《工业用品目录》中就刊载了十余条产线超过25000种产品，尤其在工业化学品领域，构建了核心竞争优势。选择震坤行，您将不必再为寻找产品采购渠道而烦恼。"
        },
        {
          title: "技术支持",
          content:
            "客户对服务的需求正逐渐超出对产品的需求，您是否正在为无法满足客户的技术咨询而苦恼？震坤行拥有自建的化学品实验室，更组建了由公司资深员工及社会行业精英组成的专家团队，竭诚为您提供在线、电话及上门的技术支持服务，解决您的后顾之忧。"
        }
      ],
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
        <Header />
        <div style={styles.inner}>
          <Breadcrumb name={`合作伙伴专区`} />
        </div>
        <div style={styles.index}>
          <div style={{ float: "left", marginTop: "15px" }}>
            <div style={styles.nav}>合作伙伴</div>
            <CollaborateSide option={this.state} />
          </div>

          <CollaborateIndex option={this.state} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Distributor;
