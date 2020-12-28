import React, { Component } from 'react';
// import Redux components
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// import Redux store state
const mapStateToProps = (state) => ({
  catFacts: state.facts.catFacts,
  catFactField: state.facts.catFactField,
});

// import Redux store functions
const mapDispatchToProps = (dispatch) => ({
  updateCatFactField: (factInput) => dispatch(actions.updateCatFactField(factInput)),
  addCatFact: () => dispatch(actions.addCatFact()),
});

const Cat = (props) => {
// class Cat extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
    const catFactArr = [];
    for (let i = 0; i < props.catFacts.length; i++) {
      catFactArr.push(<li>{props.catFacts[i]}</li>);
    }
    return (
      <div>
        <h3>Cat Facts: </h3>
        <h4>Here are some fun cat facts: </h4>
        {catFactArr}
        <br></br>
        <form>
          <label>
            Add your own cat facts here:
            <input
              type="text"
              id="catFactInput"
              value={props.catFactField}
              onChange={(e) => props.updateCatFactField(e.target.value)}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                props.addCatFact();
              }}
            >
              Add new cat fact
            </button>
          </label>
        </form>
      </div>
    );
  }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Cat);
