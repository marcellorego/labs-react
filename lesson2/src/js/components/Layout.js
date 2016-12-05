import React from "react";

export default class Layout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      names: ['item1', 'item2', 'item3']
    };
    //this.handleClick = this.handleClick.bind(this);
    console.log('constructor');
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    /*fetchItems().then(response => {
      this.setState({
        posts: response.items
      });
    });*/
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    
    this.setState({date: new Date()});

    /*this.setState((prevState, props) => ({
      date: new Date()
    }));*/

    /*this.setState(function(prevState, props) {
      return {
        date: new Date()
      };
    });*/
  }

  /*fetchItems() {
    return Prom
  }*/

  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.', e.target.value);
  }

  render() {

    let handler = this.handleClick;

    let lis = this.state.names.map((name, index) => {
      return (
        <li key={index} value={index} onClick={handler}>{name}</li>
      );
    });

    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
}