import React, { Component } from "react";

import axios from "axios";
import HeaderComponent from "./header";
import FooterComponent from "./Footer/footer";

class ActivityDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://v2.apiqa.imart360.com/news/query/id/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          html: response.data.newsEntityList[0].content
        });
      });
  }
  render() {
    return (
      <div>
        <HeaderComponent />
        <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
        <FooterComponent />
      </div>
    );
  }
}

export default ActivityDetailsComponent;
