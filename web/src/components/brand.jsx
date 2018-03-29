import React, { Component } from "react";

const styles = {
  brand: {
    height: "240px",
    width: "898px",
    border: "1px solid #e2e2e2",
    marginTop: "8px",
    float: "left"
  }
};

class BrandComponent extends Component {
  render() {
    return <div style={styles.brand}>品牌检索</div>;
  }
}

export default BrandComponent;
