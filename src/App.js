import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';


class App extends Component {

  handleOnClick() {
    this.props.addItem()
  }

  render() {
    debugger;
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem: addItem
  }, dispatch);
};
// const mapDispatchToProps = () => {
//   return {
//     addItem: addItem
//   };
// };

export default connect(mapDispatchToProps, mapStateToProps)(App);
