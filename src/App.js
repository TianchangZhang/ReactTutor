import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDemo from './button-events/EventDemo';
import { simpleAction } from './redux/actions/simpleAction';
import Nav from './nav/Nav';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("load ctor");
    }

    render() {
    return (

      <div className="App">
          <Nav></Nav>
       <EventDemo
        myName = 'Jason'
       />
      </div>
    );
  }
    componentDidMount() {
        console.log("component did mount")
    }
}

const mapStateToProps = state => ({
  ...state
 })


const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
