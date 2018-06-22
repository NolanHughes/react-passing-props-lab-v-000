import React from 'react';

import FruitBasket from './FruitBasket';


export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({
      currentFilter: event.target.value
    });
  }

  render() {
    //Would uncomment this if tests would allow it. Need to change fruit prop in FruitBasket to fruitList.
    // const fruitList = this.state.currentFilter && this.state.currentFilter !== 'all' ? this.state.fruit.filter(f => f.fruit_type === this.state.currentFilter) : this.state.fruit

    return <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleFilterChange}/>
  }
}
