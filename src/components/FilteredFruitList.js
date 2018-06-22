import React from 'react';

const FilteredFruitList = props => {
  const fruitList = props.filter && props.filter !== 'all' ? props.fruit.filter(f => f.fruit_type === props.filter) : props.fruit

  return(
    <ul className="fruit-list">
      {fruitList.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
