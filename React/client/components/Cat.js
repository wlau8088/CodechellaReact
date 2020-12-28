import React from 'react';

const Cat = (props) => {
  const { catFacts } = props;
  const catFactArr = [];
  for (let i = 0; i < catFacts.length; i++) {
    catFactArr.push(<li>{catFacts[i]}</li>);
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
};

export default Cat;
