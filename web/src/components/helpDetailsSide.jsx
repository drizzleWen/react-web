import React, { Component } from "react";

import { Link } from "react-router-dom";

import SideStyle from "../css/helpDetailsSide.css";

class HelpDetailsSideComponent extends Component {
  render() {
    return (
      <div style={{ float: "left", width: "240px", marginTop: "15px" }}>
        <div className={SideStyle.n_nav_t}>帮助中心</div>
        <div className={SideStyle.n_nav_list}>
          <ul>
            <li className={SideStyle.on}>
              <span>交易流程</span>
              <ul>
                <li>
                  <Link to={`/help/19`}>如何检索</Link>
                </li>
                <li>
                  <Link to="/help/20">如何询价</Link>
                </li>
                <li>
                  <Link to="/help/18">如何订购</Link>
                </li>
                <li>
                  <Link to="/help/9">如何支付</Link>
                </li>
                <li>
                  <Link to="/help/143">商品对比</Link>
                </li>
                <li>
                  <Link to="/help/140">询价单转订单</Link>
                </li>
                <li>
                  <Link to="/help/142">快速订货</Link>
                </li>
                <li>
                  <Link to="/help/141">找货助手</Link>
                </li>
              </ul>
            </li>
            <li className={SideStyle.on}>
              <span>配送方式</span>
              <ul>
                <li>
                  <Link to="/help/10">免运费政策</Link>
                </li>
                <li>
                  <Link to="/help/10">发货交期说明</Link>
                </li>
                <li>
                  <Link to="/help/10">验货</Link>
                </li>
              </ul>
            </li>
            <li className={SideStyle.on}>
              <span>售后服务</span>
              <ul>
                <li>
                  <Link to="/help/7">投诉与建议</Link>
                </li>
                <li>
                  <Link to="/help/4">退换货</Link>
                </li>
                <li>
                  <Link to="/help/5">订单取消</Link>
                </li>
                <li>
                  <Link to="/help/6">开票信息</Link>
                </li>
                <li>
                  <Link to="/help/144">导出打印订单</Link>
                </li>
                <li>
                  <Link to="/help/145">目录申领</Link>
                </li>
              </ul>
            </li>
            <li className={SideStyle.on}>
              <span>常见问题</span>
              <ul>
                <li>
                  <Link to="/help/16">会员注册</Link>
                </li>
                <li>
                  <Link to="/help/17">忘记密码</Link>
                </li>
                <li>
                  <Link to="/help/12">公司简介</Link>
                </li>
                <li>
                  <Link to="/help/8">联系我们</Link>
                </li>
                <li>
                  <Link to="/help/11">人才招募</Link>
                </li>
                <li>
                  <Link to="/help/3">友情链接</Link>
                </li>
                <li>
                  <Link to="/help/83">积分说明</Link>
                </li>
                <li>
                  <Link to="/help/84">如何兑换礼品</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HelpDetailsSideComponent;
