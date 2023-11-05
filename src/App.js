import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Array from "./arrayComponents/array";
import ConvexHull from "./convexHullComponents/convexHull";
import BinarySearch from "./binarySearchComponent/binarySearch";
import Queue from "./QueueComponent/queue";
import CircularQueue from "./CircularQueueComponent/circularQueue";
import Stack from "./StackComponent/stack";
import Deque from "./DequeComponent/deque";
import Quiz from "./Assessment/quize";
import Information from "./Assessment/information";
class App extends Component {
  componentDidMount() {
    console.log(window.innerHeight, "  ", window.innerWidth);
  }

  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/pathfinder" component={Pathfinder} />
          <Route path="/queue" component={Queue} />
          <Route path="/array" component={Array} />
          <Route path="/prime" component={Seive} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/sort" component={Sort} />
          <Route path="/deque" component={Deque} />
          <Route path="/stack" component={Stack} />
          <Route path="/circularqueue" component={CircularQueue} />
          <Route path="/convexhull" component={ConvexHull} />
          <Route path="/binarysearch" component={BinarySearch} />
          <Route path="/info" component={Information} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
