import React, { Component } from "react";

import { Link } from "react-router-dom";

import footerStyle from "../../css/footer.css";

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <div className={footerStyle.footIcon}>
          <div className={footerStyle.iconItem}>
            <img
              src="http://resources.imart360.com/app/dist/images/btm_icon_01.jpg"
              alt=""
              className={footerStyle.iconImg}
            />
            <img
              src="http://resources.imart360.com/app/dist/images/btm_icon_02.jpg"
              alt=""
              className={footerStyle.iconImg}
            />
            <img
              src="http://resources.imart360.com/app/dist/images/btm_icon_03.jpg"
              alt=""
              className={footerStyle.iconImg}
            />
            <img
              src="http://resources.imart360.com/app/dist/images/btm_icon_04.jpg"
              alt=""
              className={footerStyle.iconImg}
            />
            <img
              src="http://resources.imart360.com/app/dist/images/btm_icon_05.jpg"
              alt=""
              className={footerStyle.iconImg}
            />
            <img
              src="http://resources.imart360.com/app/dist/images/btm_icon_06.jpg"
              alt=""
              className={footerStyle.iconImg}
            />
          </div>
        </div>
        <div className={footerStyle.foot}>
          <div className={footerStyle.footInner}>
            <ul>
              <li className={`${footerStyle.list1}`}>
                <span
                  className={`${footerStyle.listSpan} ${footerStyle.fIcon1}`}
                >
                  <span>
                    <a className={`${footerStyle.listA}`}>
                      改善意见
                      <br />
                      <i className={footerStyle.listI}>info@zkh360.com</i>
                    </a>
                  </span>
                </span>
                <span
                  className={`${footerStyle.listSpan} ${footerStyle.fIcon3}`}
                >
                  <a className={`${footerStyle.listA}`}>
                    全线低价
                    <br />
                    <i className={footerStyle.listI}>400-680-9696</i>
                  </a>
                </span>
              </li>
              <li className={`${footerStyle.list1}`}>
                <span
                  className={`${footerStyle.listSpan} ${footerStyle.fIcon2}`}
                >
                  <a className={`${footerStyle.listA}`}>
                    传真号
                    <br />
                    <i className={footerStyle.listI}>(021)6836-9690</i>
                  </a>
                </span>
                <span
                  className={`${footerStyle.listSpan} ${footerStyle.fIcon4}`}
                >
                  <a className={`${footerStyle.listA}`}>
                    工作时间
                    <br />
                    <i className={footerStyle.listI}>周一至周五8：30-17：30</i>
                  </a>
                </span>
              </li>
              <li className={footerStyle.listLi}>
                <span className={`${footerStyle.title}`}>操作指南</span>
                <Link to={`/help/19`} className={`${footerStyle.a}`}>
                  基本操作指南
                </Link>
                <Link to={`/help/20`} className={`${footerStyle.a}`}>
                  如何询价
                </Link>
                <Link to={`/help/18`} className={`${footerStyle.a}`}>
                  如何订购
                </Link>
                <Link to={`/help/83`} className={`${footerStyle.a}`}>
                  如何说明
                </Link>
                <Link to={`/help/84`} className={`${footerStyle.a}`}>
                  如何兑换礼品
                </Link>
              </li>
              <li className={footerStyle.listLi}>
                <span className={`${footerStyle.title}`}>付款须知</span>
                <Link to={`/help/9`} className={`${footerStyle.a}`}>
                  如何支付
                </Link>
                <Link to={`/help/6`} className={`${footerStyle.a}`}>
                  开票信息
                </Link>
              </li>
              <li className={footerStyle.listLi}>
                <span className={`${footerStyle.title}`}>售后服务</span>
                <Link to={`/help/10`} className={`${footerStyle.a}`}>
                  配送方式
                </Link>
                <Link to={`/help/10`} className={`${footerStyle.a}`}>
                  交货及相关政策
                </Link>
                <Link to={`/help/7`} className={`${footerStyle.a}`}>
                  投诉受理
                </Link>
              </li>
              <li className={footerStyle.listLi}>
                <span className={`${footerStyle.title}`}>关于震坤行</span>
                <Link to={`/help/`} className={`${footerStyle.a}`}>
                  公司简介
                </Link>
                <Link to={`/help/8`} className={`${footerStyle.a}`}>
                  联系我们
                </Link>
                <Link to={`/help/82`} className={`${footerStyle.a}`}>
                  商务合作
                </Link>
                <Link to={`/help/`} className={`${footerStyle.a}`}>
                  震坤行附加值
                </Link>
                <Link to={`/help/3`} className={`${footerStyle.a}`}>
                  友情链接
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyle.footFm}>
          <p>
            Copyright <em>©</em> zkh360.com 1998 - 2017 Corporation All Rights
            Reserved 沪ICP备10006078号-5
          </p>
          <p style={{ marginTop: "10px" }}>
            <a
              href="https://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=20141021120505690"
              target="_blank"
              rel="nofollow me noopener noreferrer"
            >
              <img
                src="http://resources.imart360.com/app/dist/images/zkh_gs.jpg"
                alt=""
              />
            </a>
            <a
              href="http://www.miitbeian.gov.cn/"
              target="_blank"
              rel="nofollow me noopener noreferrer"
            >
              <img
                src="http://resources.imart360.com/app/dist/images/imrt_78.jpg"
                alt=""
              />
            </a>
            <a
              href="https://search.szfw.org/cert/l/CX20141201005716006007"
              rel="nofollow me noopener noreferrer"
              target="_blank"
            >
              <img
                src="http://resources.imart360.com/app/dist/images/imrt_80.jpg"
                alt=""
              />
            </a>
            <a
              key="58259852efbfb07d4b3caf1e"
              id="chengXin"
              logo_size="124x47"
              logo_type="realname"
              href="https://v.pinpaibao.com.cn/authenticate/cert/?site=www.zkh360.com&amp;at=realname"
              rel="nofollow me noopener noreferrer"
              target="_blank"
            >
              <script src="//static.anquan.org/static/outer/js/aq_auth.js" />
              <b id="aqLogoBPQYC" style={{ display: "none" }} />
              <img
                alt="安全联盟认证"
                style={{
                  border: "none",
                  display: "inline",
                  width: "124",
                  height: "47"
                }}
                original="//static.anquan.org/static/outer/image/sm_124x47.png?id=www.zkh360.com?t=8"
                src="//static.anquan.org/static/outer/image/sm_124x47.png?id=www.zkh360.com?t=8"
              />
            </a>
            <a>
              <img
                original="http://chinab2b.org.cn/zilvgongyue/img/logo.png"
                src="http://chinab2b.org.cn/zilvgongyue/img/logo.png"
                style={{ display: "inline", width: "108", height: "40" }}
                alt=""
              />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
