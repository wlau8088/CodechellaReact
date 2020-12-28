import React from 'react';
import Animals from './Animals';
import Vegetables from './Vegetables';

const Wrapper = props =>(
<div>
<h1>Fun Facts!</h1>


    <Animals 
        catFacts={props.catFacts}
        catFactField={props.catFactField}
        updateCatFactField={props.updateCatFactField}
        addCatFact={props.addCatFact}
    />


    <Vegetables 
        potatoFacts={props.potatoFacts}
        potatoFactField={props.potatoFactField}
        updatePotatoFactField={props.updatePotatoFactField}
        addPotatoFact={props.addPotatoFact}
    />

</div>
)

export default Wrapper;