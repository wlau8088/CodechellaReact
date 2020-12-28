import React from 'react';

const Potato = (props) => {
  const potatoFacts = props.potatoFacts;
  const potatoFactArr = [];
  for (let i = 0; i < potatoFacts.length; i++) {
    potatoFactArr.push(<li>{potatoFacts[i]}</li>);
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
            value={props.potatoFactField}
            onChange={(e) => props.updatePotatoFactField(e.target.value)}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.addPotatoFact();
            }}
          >
            Add new potato fact
          </button>
        </label>
      </form>
    </div>
  );
};

export default Potato;
