import React, { Component } from 'react'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import Candidates from './components/candidate/Candidates';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
      previousVotes : []
    };

    this.interval = null;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then(json => {

          const previousVotes = this.state.candidates.map(({id,votes}) => {
            return {id , votes};
          });

          this.setState({
            candidates: json.candidates,
            previousVotes
          })
        });
    }, 1000);
  }
  render() {

    const { candidates , previousVotes } = this.state;
    if (candidates.length === 0) {
      return <Spinner description="Carregando" />
    }
    return (
      <div className="container">
        <Header>Votação</Header>
        <Candidates previousVotes={previousVotes} candidates={candidates}/>
      </div>
    )
  }
}
