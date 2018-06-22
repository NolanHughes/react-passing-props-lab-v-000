import React from 'react';

const FilteredFruitList = props =>
  <ul className="fruit-list">
    {props.filter && props.filter !== 'all' ? props.fruit.filter(f => f.fruit_type === props.filter).map((fruit, index) => <li key={index}>{fruit.char}</li>) : props.fruit.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
  </ul>

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;

//This goes in the fruit-list ul and replace everything in there currently if the test would allow it. const fruitList has to be uncommented to work
//{props.fruit.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
