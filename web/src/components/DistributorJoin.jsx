import React, { Component } from "react";
import HeaderComponent from "./header";
import Breadcrumb from "./Breadcrumb";
import CollaborateSide from "./collaborateSide";
import Footer from "./Footer/footer";

import Styles from "../css/distributorJoin.css";

import { Input, AutoComplete, Select, Button, Cascader } from "antd";
import axios from "axios";

const Option = Select.Option;
const { TextArea } = Input;

const provinceData = ["北京市"];

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

class DistributorJoin extends Component {
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
      ],
      dataSource: [],
      Options: [],
      result: []
    };
    this.mailSearch = this.mailSearch.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://v2.apiqa.imart360.com/supplier/query/getBusinessAddr")
      .then(res => {
        let arr = res.data.object;
        arr = JSON.parse(
          JSON.stringify(arr)
            .replace(/provinceId|cityID|areaID/g, "value")
            .replace(/provinceName|cityName|areaName/g, "label")
            .replace(/cityList|areaList/g, "children")
        );

        this.setState({
          Options: arr
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSearch(value) {
    if (value != "") {
      axios(
        "http://v2.apiqa.imart360.com/supplier/query/getDataByEyeCheck/keyword/" +
          value
      )
        .then(res => {
          if (res.data.object != "无数据") {
            this.setState({
              dataSource: res.data.object
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  _Submit() {}

  mailSearch(value) {
    let result;
    if (!value || value.indexOf("@") >= 0) {
      result = [];
    } else {
      result = ["gmail.com", "163.com", "qq.com"].map(
        domain => `${value}@${domain}`
      );
    }
    this.setState({ result });
  }

  onChange(value) {
    console.log(value);
  }

  render() {
    const { dataSource } = this.state;
    const { result } = this.state;
    const { Options } = this.state;
    const children = result.map(email => {
      return <Option key={email}>{email}</Option>;
    });

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
            <div className={Styles.title}>我要合作</div>
            <div className={Styles.word}>
              震坤行秉承诚实守信的传统文化，诚邀您成为我们的分销合作伙伴，您可以通过以下几种方式与震坤行进行联络：
            </div>
            <div className={Styles.phone}>
              <span>热线电话</span>
            </div>
            <div className={Styles.phoneContent}>
              <div className={Styles.phoneImg}>
                <img src="http://resources.imart360.com/app/dist/images/nan.jpg" />
              </div>
              <ul className={Styles.phoneWord}>
                <li>
                  <i>联系人：</i>张先生
                </li>
                <li>
                  <i>营业时间：</i>周一至周五（8:30~17:30）
                </li>
                <li>
                  <i>联系电话：</i>13817801271
                </li>
                <li>
                  <i>E-mail：</i>tao.zhang@zkh360.com
                </li>
                <li>
                  <i>邮编：</i>201203
                </li>
              </ul>
            </div>
            <div className={Styles.phone}>
              <span>在线登记</span>
            </div>
            <ul className={Styles.form}>
              <li className={Styles.li}>
                <i className={Styles.i}>*</i>
                <span className={Styles.span}>公司名称:</span>
                <AutoComplete
                  dataSource={dataSource}
                  onSearch={this.handleSearch.bind(this)}
                  style={{ width: 300 }}
                />
              </li>
              <li className={Styles.li}>
                <div className={Styles.tyc}>
                  <b style={{ color: "#acacac", fontStyle: "normal" }}>
                    数据技术支持来源于
                  </b>
                  <a
                    href="https://www.tianyancha.com"
                    target="_blank"
                    style={{ color: "#acacac" }}
                  >
                    天眼查
                  </a>
                </div>
              </li>
              <li className={Styles.li}>
                <i className={Styles.i}>*</i>
                <span className={Styles.span}>营业地址:</span>
                <Cascader
                  options={Options}
                  style={{ width: 300 }}
                  onChange={this.onChange.bind(this)}
                />
              </li>
              <li className={Styles.li}>
                <Input
                  className={Styles.text}
                  style={{ marginLeft: "100px" }}
                />
              </li>
              <li className={Styles.li}>
                <i className={Styles.i}>*</i>
                <span className={Styles.span}>注册资金:</span>
                <Select defaultValue="1" style={{ width: 120 }}>
                  <Option value="1">50万以下</Option>
                  <Option value="2">50-500万</Option>
                  <Option value="3">500-1000万</Option>
                  <Option value="4">1000万以上</Option>
                </Select>
              </li>
              <li className={Styles.li}>
                <i className={Styles.i}>*</i>
                <span className={Styles.span}>联系人:</span>
                <Input className={Styles.text} />
              </li>
              <li className={Styles.li}>
                <span className={Styles.span}>公司业务:</span>
                <TextArea
                  rows={4}
                  className={Styles.textarea}
                  placeholder="请填写您经营的业务类型，200个字符以内"
                />
              </li>
              <li className={Styles.li}>
                <i className={Styles.i}>*</i>
                <span className={Styles.span}>职务:</span>
                <Input className={Styles.text} />
              </li>
              <li className={Styles.li}>
                <span className={Styles.span}>电话:</span>
                <Input className={Styles.text} />
              </li>
              <li className={Styles.li}>
                <i className={Styles.i}>*</i>
                <span className={Styles.span}>手机号码:</span>
                <Input className={Styles.text} max={11} />
              </li>
              <li className={Styles.li}>
                <span className={Styles.span}>E-mail:</span>
                <AutoComplete style={{ width: 300 }} onSearch={this.mailSearch}>
                  {children}
                </AutoComplete>
              </li>
              <li className={Styles.li}>
                <span className={Styles.span}>备注:</span>
                <TextArea
                  rows={4}
                  className={Styles.textarea}
                  placeholder="请输入您要填写的相关信息，200个字符以内"
                />
              </li>
              <li className={Styles.li}>
                <i className={Styles.i}>*</i>
                <span className={Styles.span}>验证码:</span>
                <Input className={Styles.text} style={{ width: 100 }} />
              </li>
              <li>
                <Button
                  style={{
                    width: 322,
                    marginLeft: 96,
                    marginTop: 40,
                    height: 46
                  }}
                  onClick={this._Submit.bind(this)}
                >
                  提交
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DistributorJoin;
