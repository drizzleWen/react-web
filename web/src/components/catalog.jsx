import React, { Component } from "react";

const styles = {
  catalog: {
    height: "521px",
    width: "239px",
    border: "1px solid #ccc",
    marginRight: "12px",
    float: "left"
  }
};
class CatalogComponent extends Component {
  render() {
    return (
      <div style={styles.catalog}>
        <ul>
          <li />
        </ul>
      </div>
    );
  }
}

export default CatalogComponent;
