import React, { Component } from "react";
import HeaderComponent from "./header";
import Breadcrumb from "./Breadcrumb";
import CollaborateSide from "./collaborateSide";
import Footer from "./Footer/footer";

import Styles from "../css/distributorAuthDidstributor.css";

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
const List = [
  "南京普强节能设备有限公司",
  "苏州凯比特机电设备有限公司",
  "苏州普尔达机电有限公司",
  "工研国际贸易（苏州）有限公司",
  "苏州信悦晟机电设备有限公司",
  "苏州卡普尔贸易有限公司",
  "常熟市安普达工业品贸易有限公司",
  "苏州广达机电工贸有限公司",
  "苏州明通商贸有限公司",
  "宁波杭州湾新区迈泽贸易有限公司",
  "平顶山市铭鼎物资贸易有限公司",
  "宁波惠立电气设备有限公司",
  "广州市劲致五金机电有限公司",
  "宁波威士工业科技有限公司",
  "成都尚明商业有限公司",
  "宜宾一本机械设备有限公司",
  "宜宾阿米巴商贸有限公司",
  "成都宏宇昊德机电设备有限公司",
  "太仓百恩斯商贸有限公司",
  "昆山伯元鸿电子有限公司",
  "昆山联强电子有限公司",
  "苏州库威电子科技有限公司",
  "缙云县麦芒商贸有限公司",
  "悦白能源科技（上海）有限公司",
  "深圳市汉新达实业有限公司",
  "河北万鸿来商贸有限公司",
  "重庆超卓科技有限责任公司",
  "重庆多美科技有限公司",
  "敦瑞（昆山）工业制品有限公司",
  "南京飞熊五金有限公司",
  "北京左驰工业装备有限公司",
  "南京美索科技发展有限公司",
  "南阳汇百川机械装备有限公司",
  "慈溪市创强电气有限公司",
  "沈阳爱尔法科技发展有限公司",
  "成都铭伟德科技有限公司",
  "成都市蜀茂源商贸有限公司",
  "四川省昂牛工铁贸科技有限公司",
  "成都博众兴业科技有限公司",
  "青海海琪工贸有限公司"
];

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
          <div className={Styles.right}>
            <img src="http://resources.imart360.com/app/dist/images/jxs_banner.jpg" />
            <div className={Styles.Title}>
              <span>经销商认证</span>
            </div>
            {List.map(items => {
              return (
                <div key={items} className={Styles.itemsWarp}>
                  <div className={Styles.itemsContent}>
                    <div className={Styles.itemsTitle}>
                      <b />
                      {items}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default distributorWord;
