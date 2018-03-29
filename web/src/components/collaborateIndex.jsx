import React, { Component } from "react";
import { Link } from "react-router-dom";
import collaborateIndexStyle from "../css/collaborateIndex.css";

class collaboratelIndex extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={collaborateIndexStyle.inner}>
          <div className={collaborateIndexStyle.left}>
            <h3>{this.props.option.title}</h3>
            <span>{this.props.option.content}</span>
          </div>
          <div>
            <img
              src="http://resources.imart360.com/app/dist/images/n_banner_2.jpg"
              alt=""
            />
          </div>
          <div className={collaborateIndexStyle.title}>
            <span>震坤行工业超市平台优势</span>
          </div>
          <div className={collaborateIndexStyle.details}>
            <ul className={collaborateIndexStyle.detailsHeader}>
              <li>
                <Link to="/Distributor/Join">
                  <img
                    src="http://resources.imart360.com/app/dist/images/distributor_03.png"
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to="/brand.html">
                  <img
                    src="http://resources.imart360.com/app/dist/images/distributor_05.png"
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link to="/QuickInquiry">
                  <img
                    src="http://resources.imart360.com/app/dist/images/distributor_07.png"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
            <img src="http://resources.imart360.com/app/dist/images/distributor_13.png" />
            <div
              className={collaborateIndexStyle.title}
              style={{ marginTop: "30px" }}
            >
              <span>与震坤行合作你可以获得</span>
            </div>
            <div className={collaborateIndexStyle.word}>
              <ul>
                {this.props.option.advantage.map(item => {
                  return (
                    <li key={item.title}>
                      <div className={collaborateIndexStyle.price}>
                        {item.title}
                      </div>
                      <div className={collaborateIndexStyle.content}>
                        {item.content}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default collaboratelIndex;
