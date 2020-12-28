import React, { Component } from 'react';
// import Redux components
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// import Redux store state
const mapStateToProps = (state) => ({
  potatoFacts: state.facts.potatoFacts,
  potatoFactField: state.facts.potatoFactField,
});

// import Redux store functions
const mapDispatchToProps = (dispatch) => ({
  updatePotatoFactField: (factInput) => dispatch(actions.updatePotatoFactField(factInput)),
  addPotatoFact: () => dispatch(actions.addPotatoFact()),
});

// We need a component with props as the mapStateToProps and mapDispatchToProps puts the variables in props
class Potato extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const potatoFactArr = [];
    for (let i = 0; i < this.props.potatoFacts.length; i++) {
      potatoFactArr.push(<li>{this.props.potatoFacts[i]}</li>);
    }
    return (
      <div>
        <h3>Potato Facts: </h3>
        <h4>Here are some fun potato facts: </h4>
        {potatoFactArr}
        <br></br>
        
        <form>
          <label>
            Add your own potato facts here:
            <input
              type="text"
              id="potatoFactInput"
              value={this.props.potatoFactField}
              onChange={(e) => this.props.updatePotatoFactField(e.target.value)}
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.addPotatoFact();
              }}
            >
              Add new potato fact
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Potato);
