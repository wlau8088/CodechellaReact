import React from 'react';
import Potato from './Potato';

const Vegetables = (props) => (
  <div className="Vegetables">
    <h2>Vegetables</h2>
    <Potato
      potatoFacts={props.potatoFacts}
      potatoFactField={props.potatoFactField}
      updatePotatoFactField={props.updatePotatoFactField}
      addPotatoFact={props.addPotatoFact}
    />
  </div>
);

export default Vegetables;
