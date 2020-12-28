import React from 'react';
import Cat from './Cat';

const Animals = (props) => (
  <div className="Animals">
    <h2>Animals</h2>
      <Cat
        catFacts={props.catFacts}
        catFactField={props.catFactField}
        updateCatFactField={props.updateCatFactField}
        addCatFact={props.addCatFact}
      />
  </div>
);

export default Animals;
