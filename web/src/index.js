import React from "react";
import ReactDOM from "react-dom";
import HomeComponent from "./components/Home";
import ActivityDetailsComponent from "./components/activityDetails";
import helpDetailsComponent from "./components/helpDetails";
import DistributorComponent from "./components/Distributor";
import DistributorWord from "./components/DistributorWord";
import DistributorAuthDistributor from "./components/DistributorAuthDistributor";
import DistributorJoin from "./components/DistributorJoin";
import LoginComponent from "./components/login";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./common/css/initial.css";

const distributorComponent = ({ match }) => (
  <div>
    <Route exact path={`${match.url}/`} component={DistributorComponent} />
    <Route path={`${match.url}/word`} component={DistributorWord} />
    <Route
      path={`${match.url}/AuthDistributor`}
      component={DistributorAuthDistributor}
    />
    <Route path={`${match.url}/Join`} component={DistributorJoin} />
  </div>
);

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={HomeComponent} exact />
      <Route path="/login" component={LoginComponent} />
      <Route path="/activity/:id" component={ActivityDetailsComponent} />
      <Route path="/help/:id" component={helpDetailsComponent} />
      <Route path="/Distributor" component={distributorComponent} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
